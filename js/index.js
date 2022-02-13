const links = [
    'https://wa.me/message/VJUDVSACZLTJL1',
    'https://wa.me/message/Y4K6ANACDTWCI1',
    'https://wa.me/message/EGJH7MGBMIBCG1',
    'https://wa.me/message/UBK3WUD4WMQ4L1',
    'https://wa.me/message/QGOHBCFNDKL6O1',
    'https://wa.me/message/ARGCZKYJTQV7L1'
]

var salesmanNumber;

window.addEventListener('load', redirect);

async function redirect(){
    const database = firebase.database();
    await database.ref('salesmanNumber').once('value', number => {
        salesmanNumber = number.val();
    })

    const newValue = salesmanNumber + 1 < links.length ? salesmanNumber + 1 : 0;

    database.ref('salesmanNumber').set(newValue);
    

    window.location.replace(links[salesmanNumber]);
}
