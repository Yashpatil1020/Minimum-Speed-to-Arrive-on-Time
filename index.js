var minSpeedOnTime = function(dist, hour) {
    let low=1, high= 1e7,ans=-1;
    while(low<=high){
        let mid =Math.floor(low+(high-low)/2);
        if(canReach(dist,hour,mid)){
            ans=mid;
            high=mid-1;
        } else{
            low=mid+1;
        }
    }
    return ans;
};
var canReach=function(dist,hour,speed){
   let time=0.0;
   for(let i=0; i<dist.length; i++){
    let t=dist[i]/speed;
    if(i !=dist.length-1){
        time+=Math.ceil(t);
    } else{
        time+=t;
    }
   }
   return time<=hour;
};