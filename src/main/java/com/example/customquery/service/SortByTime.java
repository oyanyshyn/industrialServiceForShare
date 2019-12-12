package com.example.customquery.service;

import com.example.customquery.entity.Absenteeism;

import java.util.Comparator;

public class SortByTime implements Comparator<Absenteeism> {

    @Override
    public int compare(Absenteeism o1, Absenteeism o2) {
        if (o2.getTime().isBefore(o1.getTime())){
            return 1;
        }
        else if (o1.getTime().isBefore(o2.getTime())){
            return -1;
        } else{
            return 0;
        }

    }
}
