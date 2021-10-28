function solution(answers) {
                let answer = [];
                let answer1=[1,2,3,4,5], answer2=[2,1,2,3,2,4,2,5], answer3=[3,3,1,1,2,2,4,4,5,5];
                let max=Number.MIN_SAFE_INTEGER;
                
                for(let i=0; i<answers.length; i++){
                    answer1[i]=answer1[i%5];
                    answer2[i]=answer2[i%8];
                    answer3[i]=answer3[i%10];
                }
                let cnt1=cnt2=cnt3=0;
                for(let i=0; i<answers.length; i++){
                    if(answers[i]===answer1[i]) cnt1++;
                    if(answers[i]===answer2[i]) cnt2++;
                    if(answers[i]===answer3[i]) cnt3++;
                }

                max=Math.max(cnt1,cnt2,cnt3);

                if(max===cnt1){
                    answer.push(1);
                }
                if(max===cnt2){
                    answer.push(2);
                }
                if(max===cnt3){
                    answer.push(3);
                }

                return answer;
            }
