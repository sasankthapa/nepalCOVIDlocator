import json

fileToImport = './csvs/HospitalData.csv'
outputFile = './outputJsons/hospitals.json'
#set output and input file to absolute location in the webserver and take the data from that absolute location in the react app

outputArray=[]
f=open(fileToImport,'r')

for line in f.readlines():
    curr={}
    line=line.strip()
    if line=='':
        continue
    line=line.split(',')
    if line[0]=='Name':
        continue
    curr['Name']=line[0]
    curr['lat']=line[1].split('/')[0]
    curr['long']=line[1].split('/')[1]
    curr['totaltests']=line[2]
    if line[3]!='':
        curr['extra']=True
    curr['percent']=line[4]
    outputArray += [curr]

with open(outputFile,'w+') as f:
    f.write(json.dumps(outputArray))