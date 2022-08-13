const { request, response } = require('express');
const express = require('express');
const puppeteer = require('puppeteer');
const app = express();

app.use(express.json());

app.post('/school-meal', (request, response)=>{
    const utterance = request.body.userRequest.utterance;

    if(utterance === "오늘의 급식"){
        const chatbotResponse = {
            "version": "2.0",
            "template": {
                "outputs": [
                    {
                        "simpleText": {
                            "text": "오늘 날짜를 알려주세요. 예) 1월 1일"
                        }
                    }
                ]
            }
        }
        
        response.json(chatbotResponse)
    }
});

app.post('/school-meal/daily', (request, response)=>{
    const utterance = request.body.userRequest.utterance;

    //todo : 월/일 형식이 맞는지 확인

    //todo : month = 월, date = 일

    //todo : '점심' 버튼 click


});

app.get('/crawling/test', async(request, response)=>{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://sunrint.sen.hs.kr/65129/subMenu.do');

    const table = await page.$('table > tbody')
    console.log(table)

    //await page.click('table > tbody');


    await browser.close();
});

app.listen(3000, ()=> console.log("node on 3000"));