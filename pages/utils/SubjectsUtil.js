function processSubject(subject){
        var casts="";
        var directors="";
        var tempCasts=subject.casts;
        for( var index=0;index<tempCasts.length;index++){
          if(casts==""){
            casts=tempCasts[index].name;
          }else{
            casts=casts+"/"+tempCasts[index].name;
          }
        }
        var tempDirectors=subject.directors;
        for(var index=0;index< tempDirectors.length;index++){
          if(directors==""){
            directors=tempDirectors[index].name;
          }else{
             directors=directors+"/"+tempDirectors[index].name;
          }
         
        }
      
        var genres=subject.genres;
        var year=subject.year;
        
        subject.info="导演："+directors+"\n主演："+casts+"\n类型："+genres+"\n上映时间："+year;
        // console.log("subject.info="+subject.info);
        subject.average=subject.rating.average;


        
  };
  function processSubjects(subjects){

    for(var index=0;index<subjects.length;index++){
        processSubject(subjects[index]);    
    }
  }

  module.exports.processSubjects = processSubjects;
  module.exports.processSubject=processSubject;
