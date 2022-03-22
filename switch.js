var inputdata = 'cyh_interview_new';
let [num , orderby] = ['' , '']

switch(inputdata){
    case "cyh_interview_new" : 
         num = 5;
         orderby = 'asc'
         break;
    case "cyh_portfolio_new" : 
         num = 10;
         orderby = 'desc'
         break;
    case "cyh_qna_new" :
         num = 3;
         orderby = 'desc'
         break;
    case "cyh_contact_new" : console.log('사전면접 테이블'); break;
    default : alert('테이블 없음 다시 확인 바람'); break;
}

// 차% -> 차로 시작하는 모든~~~

// 테이블명 : promotion
// 필드명 : 금액(amount) , 고객명(nm) , 날짜(order_day)

// 주문자 차영현의 최근 주문 5개가 보내주세요
// select `amount` , `order_day` from promotion where `nm` = '차영현' order by order_day desc limit 0,5

