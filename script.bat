#!/bin/bash

running the entire webapplication

python3 Backend/index.py & mongod --dbpath ./DataBase & cd frontEnd; npm start
