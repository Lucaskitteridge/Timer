let times = process.argv.slice(2);

times.sort(function(a, b){return a-b});

for(let time of times){
  if(time > 0 && !NaN)
  setTimeout(() => {
    process.stdout.write('.');
  }, time * 1000)
}

