import json

fileToImport = '/home/sasank/BiggerProjects/NepalCOVIDLocator/datascripts/csvs/npData.csv'
outputFile = '/home/sasank/Documents/shellscripts/data/npData.json'

outputObject={}
f=open(fileToImport,'r')
for line in f.readlines():
    line=line.strip()
    if line=='':
        continue
    line=line.split(',')
    if '%' in line[1]:
        outputObject[line[0]]=line[1]
        continue
    outputObject[line[0]]=int(line[1])

with open(outputFile,'w+') as f:
    f.write(json.dumps(outputObject))