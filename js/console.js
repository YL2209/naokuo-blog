function createtime1() {
    var now1 = new Date();
    var grt = new Date("06/11/2021 00:00:00"); //此处修改你的建站时间或者网站上线时间
    now1.setTime(now1.getTime() + 250);
    var days = (now1 - grt) / 1000 / 60 / 60 / 24;
    var dnum = Math.floor(days);

    var ascll = [
        `欢迎来到Naokuo🥝の小家!`,
        `Future is now 🍭🍭🍭`,
        `
███╗   ██╗ █████╗  ██████╗ ██╗  ██╗██╗   ██╗ ██████╗ 
████╗  ██║██╔══██╗██╔═══██╗██║ ██╔╝██║   ██║██╔═══██╗
██╔██╗ ██║███████║██║   ██║█████╔╝ ██║   ██║██║   ██║
██║╚██╗██║██╔══██║██║   ██║██╔═██╗ ██║   ██║██║   ██║
██║ ╚████║██║  ██║╚██████╔╝██║  ██╗╚██████╔╝╚██████╔╝
╚═╝  ╚═══╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝  ╚═════╝                                        
        `,
        "小站已经苟活",
        dnum,
        "天啦!",
        "©2023 By Naokuo",
    ];
    setTimeout(
        console.log.bind(
            console,
            `\n%c${ascll[0]} \n%c ${ascll[1]} \n%c ${ascll[2]} \n%c${ascll[3]}%c ${ascll[4]}%c ${ascll[5]}\n%c ${ascll[6]}\n`,
            "color:#39c5bb",
            "color:#39c5bb",
            "color:#39c5bb",
            "color:#39c5bb",
            "",
            "color:#39c5bb",
            "color:#39c5bb"
        )
    );
}
createtime1();