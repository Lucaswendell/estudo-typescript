#!/bin/bash
mkdir ./$1 

if [ -n "$2" ]
then
    cp  ./$2/* ./$1
fi
