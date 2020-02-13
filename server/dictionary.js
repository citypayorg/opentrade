'use strict';

exports.object = {
    c : function(strCoin) {
        try {
            return exports.object[strCoin][exports.object.coin];
        }
        catch(e) {
            return strCoin;
        }
    },
    l : function(str) {
        try {
            return this.dict['_words_'][str][this.dict.lang];
        }
        catch(e) {
            return str;
        }
    },
    setLanguage : function(lang) {
        if (lang == 'en')
            this.lang = 0;
            if (lang == 'ru')
            this.lang = 1;
            if (lang == 'kr')
            this.lang = 2;
    },
    'lang' : 0,
    '_words_' : {
        'Buy' : ['Buy', 'Купить', '구매'],
        'Sell' : ['Sell', 'Продать', '판매'],
        'buy' : ['buy', 'купить', '구매'],
        'Faucet' : ['Faucet', 'Кран', '꼭지'],
        'Forum' : ['Forum', 'Форум', '포럼'],
        'sell' : ['sell', 'продать', '판매'],
        'Buying' : ['Buying', 'Покупка', '구매중'],
        'Selling' : ['Selling', 'Продажа', '판매중'],
        'Help' : ['Help', 'Помощь', '도움'],
        'Wallet' : ['Wallet', 'Кошелек', '지갑'],
        'Exchange' : ['Exchange', 'Обменник', '환전'],
        'Trade' : ['Trade', 'Биржа', '거래'],
        'Support' : ['Support', 'Поддержка', '지원'],
        'Fees' : ['Fees', 'Комиссии', '수수료'],
        'Login' : ['Login', 'Вход', '로그인'],
        'Your active orders' : ['Your active orders', 'Ваши активные заявки', '활성화 주문'],
        'Your history' : ['Your history', 'Ваши исполненные заявки', '내히스토리'],
        'Trade history' : ['Trade history', 'История торгов', '거래히스토리'],
        'Forgot your password?' : ['Forgot your password?', 'Забыли пароль?', '암호를 잊으셨습니까?'],
        'New to OpenTrade?' : ['New to OpenTrade?', 'Еще не зарегистрированы на OpenTrade?', '새로오셨습니까?'],
        'Sign up now!' : ['Sign up now!', 'Зарегистрироваться сейчас!', '회원가입'],
        'OpenTrade - Open Source Cryptocurrency Exchange' : ['OpenTrade - Open Source Cryptocurrency Exchange', 'OpenTrade - Биржа криптовалют с открытым кодом', '암호화폐 거래']
    }
};
