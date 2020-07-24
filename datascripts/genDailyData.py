import json

fileToImport = '/home/sasank/BiggerProjects/NepalCOVIDLocator/datascripts/csvs/dailysheet.csv'
outputFile = '/home/sasank/Documents/shellscripts/data/daily.json'
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
    curr['totaltests']=int(line[1])
    curr['recovered']=int(line[2])
    curr['deaths']=int(line[3])
    curr['confirmed']=int(line[4])
    outputArray+=[curr]

with open(outputFile,'w+') as f:
    f.write(json.dumps(outputArray))
