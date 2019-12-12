package com.example.customquery.service;


import com.example.customquery.dto.request.EfficiencyRequest;
import com.example.customquery.dto.response.CollectiveResponse;
import com.example.customquery.dto.response.EfficiencyResponse;
import com.example.customquery.entity.*;
import com.example.customquery.repository.AbsenteismRepository;
import com.example.customquery.repository.CollectiveRepository;
import com.example.customquery.repository.EtbDataRepository;
import com.example.customquery.repository.ReferenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class EfficiencyServise {
    @Autowired
    private AbsenteismRepository absenteismRepository;
    @Autowired
    private EtbDataRepository etbDataRepository;
    @Autowired
    private CollectiveRepository collectiveRepository;

    @Autowired
    private ReferenceRepository referenceRepository;


    private Float summDmh = 0f;
    private Integer resShift;
    private Integer quantHarnRef;
    private Float efficiency;
    private Integer fullQuantity;
    List<String> infoTesting = new ArrayList<>();


    public List<CollectiveResponse> get() {
        return collectiveRepository.findAll().stream().map(CollectiveResponse::new).collect(Collectors.toList());
    }

    public List<EfficiencyResponse> efficiencyByPeriodAndTeam (EfficiencyRequest efficiencyRequest){
        List<EfficiencyResponse> efficiencyResponseList = new ArrayList<>();


        LocalDate startdate = efficiencyRequest.getDate();
        LocalDate finishDate = efficiencyRequest.getDateFn();

        if (startdate.isBefore(finishDate)) {
            finishDate=finishDate.plusDays(1);
            while (startdate.isBefore(finishDate)) {
                 finishDate=finishDate.minusDays(1);
                efficiencyRequest.setDate(finishDate);
                System.out.println(efficiencyRequest.getDate());

                try {

                    efficiencyResponseList.add(efficiencyByDayAndTeam(efficiencyRequest));

                     }
                catch (Exception e){
                    System.out.println("Hollyday -"+ finishDate);
                    continue;
                }
            }
        }else{throw new IllegalArgumentException("Date isn't correct");}
        if(efficiencyResponseList.size()==0){throw new IllegalArgumentException("Incorrect data");}
       return efficiencyResponseList;
    }

    public EfficiencyResponse efficiencyByDayAndTeam(EfficiencyRequest efficiencyRequest) {
        summDmh = 0f;
        efficiency = 0f;
        infoTesting.clear();
        quantHarnRef=0;
        summDmh = 0f;
        fullQuantity=0;
        EfficiencyResponse efficiencyResponse = new EfficiencyResponse();
        Collective collective = collectiveRepository.findByNameCollective(efficiencyRequest.getCollective());
        if (collective != null) {
            Integer resShift[] = checkShift(collective, efficiencyRequest.getDate(), efficiencyRequest.getPlant());
            List<Absenteeism> absenteeisms = absenteismRepository.findByCollectiveAndDate(collective, efficiencyRequest.getDate());
            int notFull = 0;
            int exit=0;
            int com=0;
            int full = 0;

            List<LocalTime> tougether = new ArrayList<>();
            List<Integer> status = new ArrayList<>();

            absenteeisms.sort(new SortByTime());
            for (Absenteeism each : absenteeisms) {
                if (each.getStatusScan() == PresenceWork.REGISTRED) {
                    full++;
                }
                if (each.getStatusScan() != PresenceWork.REGISTRED) {
                    notFull++;
                    switch (each.getStatusScan()) {
                        case EXIT: {
                            tougether.add(each.getTime());
                            status.add(1);
                            exit++;
                            break;
                        }
                        case COMING: {
                            tougether.add(each.getTime());
                            status.add(2);
                            com++;
                            break;
                        }

                        default: {
                            throw new IllegalArgumentException("absienteeism - somesing wrong");
                        }
                    }
                }
            }
            if (resShift[0] == 1 || resShift[0] == 2) {
                if (absenteeisms.size() != 0) {
                    Float [] eff = efficiencyDayShift(collective, efficiencyRequest.getDate(), absenteeisms.size(), resShift[0], efficiencyRequest.getPlant(), notFull, tougether, status, full);
                    efficiency = eff[0];
                    efficiencyResponse.setQuantWorkers(full);

                    efficiencyResponse.setTotalByShift(resShift[2]);
                    efficiencyResponse.setTotalByDay(Math.round(eff[1]));
                } else {
                    throw new IllegalArgumentException("absienteism is empty");
                }
            }

            if (resShift[0] == 3) {
                if (absenteeisms.size() != 0) {
                    Float [] eff = efficiencyNigtShift(collective, efficiencyRequest.getDate(), absenteeisms.size(), resShift[0], efficiencyRequest.getPlant(), notFull, tougether, status, full);
                    efficiency = eff[0];
                    efficiencyResponse.setQuantWorkers(full);

                    efficiencyResponse.setTotalByShift(Math.round(eff[1]));
                    efficiencyResponse.setTotalByDay(resShift[1]);
                } else {
                    throw new IllegalArgumentException("absienteism is empty");
                }
            }
            List <String> refQuant= new ArrayList<>();
            for (String each: infoTesting){
                refQuant.add(each);
            }
            efficiencyResponse.setEfficiency(efficiency);
            efficiencyResponse.setCollective(collective.getNameCollective());
            efficiencyResponse.setDate(efficiencyRequest.getDate());
            efficiencyResponse.setReferences(refQuant);
            efficiencyResponse.setPlant(efficiencyRequest.getPlant());

        } else {
            throw new IllegalArgumentException("Collective is empty");
        }

        return efficiencyResponse;

    }


    private Integer[] checkShift(Collective collective, LocalDate date, Plant plant) {
        List<EtbData> etbDataFsh = etbDataRepository.findByColectivEtbAndDateEtbAndStatusTestAndShiftEtbAndPlant(collective, date, StatusTest.TESTED, 1, plant);
        List<EtbData> etbDataSsh = etbDataRepository.findByColectivEtbAndDateEtbAndStatusTestAndShiftEtbAndPlant(collective, date, StatusTest.TESTED, 2, plant);
        List<EtbData> etbDataNsh = etbDataRepository.findByColectivEtbAndDateEtbAndStatusTestAndShiftEtbAndPlant(collective, date, StatusTest.TESTED, 3, plant);
        Integer quntShift = 0;
        if (etbDataFsh.size() > etbDataSsh.size() && etbDataFsh.size() > etbDataNsh.size()) {
            resShift = 1;
            quntShift= etbDataFsh.size();
        } else if (etbDataSsh.size() > etbDataNsh.size() && etbDataSsh.size() > etbDataFsh.size()) {
            resShift = 2;
            quntShift= etbDataSsh.size();
        } else if (etbDataNsh.size() > etbDataFsh.size() && etbDataNsh.size() > etbDataSsh.size()) {
            resShift = 3;
             quntShift= etbDataNsh.size();
        } else {
            throw new IllegalArgumentException("shift is empty");
        }
        fullQuantity = etbDataSsh.size() + etbDataFsh.size() + etbDataNsh.size();
        return new Integer[]{resShift, fullQuantity,quntShift};
    }


    private Float[] efficiencyNigtShift(Collective collective, LocalDate date, Integer size, Integer resShift, Plant plant, int notFull, List<LocalTime> tougether, List<Integer> status, int full) {
        infoTesting.clear();
        efficiency=0f;

        LocalTime startTime = LocalTime.of(23,00);
        LocalTime  finishTime =LocalTime.of(06, 00);

        List<EtbData> etbDatas1 = etbDataRepository.findByColectivEtbAndDateEtbAndStatusTestAndPlant (collective, date.minusDays(1), StatusTest.TESTED, plant);
        List<EtbData> etbDatas2 = etbDataRepository.findByColectivEtbAndDateEtbAndStatusTestAndPlant (collective, date, StatusTest.TESTED, plant);
        List <EtbData> etbDatas = new ArrayList<>();
                for(EtbData each: etbDatas1){
                    if (each.getTimeEtb().isAfter(startTime)||each.getTimeEtb().equals(startTime) ){
                        etbDatas.add(each);
                    }
                }
                for(EtbData each: etbDatas2){
                    if (each.getTimeEtb().isBefore(finishTime)||each.getTimeEtb().equals(finishTime) ){
                        etbDatas.add(each);
                    }
        }
        if (etbDatas.size() != 0) {
            List<Reference> references = references(etbDatas);

            int nowMinutes = TimeOfminutes(resShift);

            if (notFull == 0) {
                for (Reference each : references) {
                    quantHarnRef = findQarefNight (each, etbDatas);
                    summDmh += quantHarnRef * each.getTimeDmh();
                    infoTesting.add(" "+each.getNameReference() + "-" + quantHarnRef);
                }

                if (date.equals(LocalDate.now()) == true && nowMinutes < 280) {
                    efficiency = (((summDmh) * 60) / (((nowMinutes) * 10008) * size)) * 100;
                }
                else if (date.equals(LocalDate.now()) == true && nowMinutes > 280 && nowMinutes < 420) {
                    efficiency = (((summDmh) * 60) / (((nowMinutes-30) * 10008) * size)) * 100;
                }
                else {
                    efficiency = ((summDmh) / ((7 * 10008) * size)) * 100;

                }
            } else {
                for (Reference each : references) {
                    quantHarnRef = findQarefNight (each, etbDatas);
                    summDmh += quantHarnRef * each.getTimeDmh();
                    infoTesting.add(" "+each.getNameReference() + "-" + quantHarnRef);
                }
                System.out.println(summDmh);
                efficiency = (summDmh/(difQuantityTime(tougether, status, resShift, full,date)))*100;

            }


        } else {
            efficiency = 0f;
            throw new IllegalArgumentException("No harnesses whith was tested");
        }
        return new Float[] {efficiency,(etbDatas.size()+0f)};
    }

    private List<Reference> references (List<EtbData> etbDatas){
        List<Reference> references = new ArrayList<Reference>();
        for (EtbData each : etbDatas) {

            if (references.contains(each.getReference()) == false) {
                references.add(each.getReference());
                System.out.println(each.getReference().getNameReference());
            }
        }
        return references;
    }




    private Float[] efficiencyDayShift(Collective collective, LocalDate date, Integer size, Integer resShift, Plant plant, int notFull, List<LocalTime> tougether, List<Integer> status, int full) {
        infoTesting.clear();
        efficiency=0f;
        List<EtbData> etbDatas = etbDataRepository.findByColectivEtbAndDateEtbAndStatusTestAndPlant(collective, date, StatusTest.TESTED, plant);
        if (etbDatas.size() != 0) {
            List<Reference> references = references(etbDatas);

          int nowMinutes = TimeOfminutes(resShift);

            if (notFull == 0) {
                for (Reference each : references) {
                    quantHarnRef = findTeorTime(each, collective, date, plant);
                    summDmh += quantHarnRef * each.getTimeDmh();
                    infoTesting.add(" "+each.getNameReference() + "-" + quantHarnRef);
                }

                if (date.equals(LocalDate.now()) == true && nowMinutes < 280) {
                    efficiency = (((summDmh) * 60) / (((nowMinutes) * 10008) * size)) * 100;
                      }
                else if (date.equals(LocalDate.now()) == true && nowMinutes > 280 && nowMinutes < 480) {
                    efficiency = (((summDmh) * 60) / (((nowMinutes-30) * 10008) * size)) * 100;
                }
                      else {
                    efficiency = ((summDmh) / ((8 * 10008) * size)) * 100;

                }
            } else {
                for (Reference each : references) {
                    quantHarnRef = findTeorTime(each, collective, date, plant);
                    summDmh += quantHarnRef * each.getTimeDmh();

                    infoTesting.add(" "+each.getNameReference() + "-" + quantHarnRef);
                }
                System.out.println(summDmh);
               efficiency = (summDmh/(difQuantityTime(tougether, status, resShift, full,date)))*100;
                System.out.println(efficiency);
            }


        } else {
            efficiency = 0f;
            throw new IllegalArgumentException("No harnesses whith was tested");
        }
        return new Float[] {efficiency,(etbDatas.size()+0f)};
    }


    private Integer findTeorTime(Reference reference, Collective collective, LocalDate date, Plant plant) {
        quantHarnRef  = etbDataRepository.findByColectivEtbAndDateEtbAndStatusTestAndReferenceAndPlant(collective, date, StatusTest.TESTED, reference, plant).size();
         return quantHarnRef;
    }

    private Integer findQarefNight (Reference reference, List<EtbData> etbDatas) {
        quantHarnRef=0;
        for (EtbData each: etbDatas){
        if (each.getReference()==reference){
            quantHarnRef++;
        }
        }
        return quantHarnRef;
    }


    private Integer TimeOfminutes(Integer shift) {
        int startTime = 0;
        int startMinute = 0;
        if (shift == 1) {
            startTime = 6;
        } else if (shift == 2) {
            startTime = 14;
            startMinute = 30;
        } else if (shift == 3) {
            startTime = 23;
        }

        LocalTime start = LocalTime.of(startTime, startMinute);
        LocalTime now = LocalTime.now();
        LocalTime res = now.minusHours(start.getHour()).minusMinutes(start.getMinute());

        Integer minutes = res.getHour() * 60 + res.getMinute() + res.getSecond() / 60;
        return minutes;
    }

    private Float dmhPeriod(LocalTime start, LocalTime finish) {
        Float summDmh3 = 0f;
        LocalTime res = finish.minusHours(start.getHour()).minusMinutes(start.getMinute());
        Integer minutes = res.getHour() * 60 + res.getMinute() + res.getSecond() / 60;
        summDmh3 = minutes * 166.8f;
        return summDmh3;
    }

    private Float difQuantityTime (List<LocalTime> tougether, List<Integer> status, Integer shift,int full, LocalDate date){

        float efficiencyByTime=0f;
        Integer tempFull = full;
        LocalTime startEnd = LocalTime.of(06, 00);
        LocalTime finishTime =LocalTime.of(14, 30);
        LocalTime lunchTime = LocalTime.of(10, 00);
        int nowMinutes = TimeOfminutes(shift);

                          if (shift == 1) {
                            startEnd = LocalTime.of(06, 00);
                            finishTime =LocalTime.of(14, 30);
                            lunchTime =LocalTime.of(10, 00);
                        } else if (shift == 2) {
                            startEnd = LocalTime.of(14, 30);
                            finishTime =LocalTime.of(23, 00);
                            lunchTime =LocalTime.of(17, 30);
                        } else if (shift == 3) {
                            startEnd = LocalTime.of(23, 00);
                            finishTime =LocalTime.of(06, 00);
                            lunchTime =LocalTime.of(02, 30);
                        }

        for (int i =0; i < tougether.size(); i++) {

            if (tougether.get(i).isBefore(startEnd) ){tougether.set(i, startEnd);}
            efficiencyByTime += full* dmhPeriod(startEnd,tougether.get(i));
            startEnd=tougether.get(i);

            if (status.get(i) == 1) {full--;}
            else if (status.get(i) == 2) {full++;}
            else { throw new IllegalArgumentException("Problem with list status in/out ");}

            if (lunchTime.isBefore(tougether.get(i))){tempFull=full;}
        }
        if (date.equals(LocalDate.now()) == true && nowMinutes < 480) {finishTime=LocalTime.now();}
        if (date.equals(LocalDate.now()) == true && nowMinutes>270){efficiencyByTime +=  (full* dmhPeriod(startEnd,finishTime))-(5004*tempFull);}
        else if (date.equals(LocalDate.now()) == true && nowMinutes<270){efficiencyByTime +=  full* dmhPeriod(startEnd,finishTime);}
        else {efficiencyByTime +=  (full* dmhPeriod(startEnd,finishTime))-(5004*tempFull);}

        System.out.println(efficiencyByTime);
        return efficiencyByTime;
    }

    }

