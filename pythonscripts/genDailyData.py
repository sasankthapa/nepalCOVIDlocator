import json

fileToImport = './csvs/dailysheet.csv'
outputFile = './outputJsons/daily.json'
#set output and input file to absolute location in the webserver and take the data from that absolute location in the react app

outputArray=[]
f=open(fileToImport,'r')
for line in f.readlines():
    curr={}
    line=line.strip()
    if line=='':
        continue
    line=line.split(',')
    if line[0]=='Date':
        continue
    curr['date']=line[0]
    curr['totaltests']=line[1]
    curr['recovered']=line[2]
    curr['deaths']=line[3]
    curr['confirmed']=line[4]
    outputArray+=[curr]

with open(outputFile,'w+') as f:
    f.write(json.dumps(outputArray))