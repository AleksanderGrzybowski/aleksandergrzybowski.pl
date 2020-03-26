#! /bin/bash
set -e

IMAGE=kelog/aleksandergrzybowski.pl:latest 

docker build -t ${IMAGE} . 
docker push ${IMAGE} 
sleep 10 
kubectl get pods | grep aleksandergrzybowski |awk '{ print $1}' | xargs kubectl delete pod
