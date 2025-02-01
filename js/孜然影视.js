var rule = {
    title: '孜然影视',
    host: 'https://zrys1.top',
    homeUrl: '/index.php/vod/show/id/66.html',
    // url:'/index.php/vod/show/id/fyclass/page/fypage.html',
    url: '/index.php/vod/show/id/fyfilter.html',
    filterable: 1,//是否启用分类筛选,
    filter_url: '{{fl.cateId}}{{fl.area}}{{fl.by or "/by/time"}}{{fl.lang}}{{fl.year}}/page/fypage{{fl.year}}',
    filter: {
        "1": [{ "key": "cateId", "name": "类型", "value": [{ "n": "全部", "v": "1" }, { "n": "动作片", "v": "6" }, { "n": "喜剧片", "v": "7" }, { "n": "爱情片", "v": "8" }, { "n": "剧情片", "v": "11" }, { "n": "科幻片", "v": "9" }, { "n": "恐怖片", "v": "10" }, { "n": "战争片", "v": "12" }, { "n": "动漫电影", "v": "33" }] }, { "key": "year", "name": "年份", "value": [{ "n": "全部", "v": "" }, { "n": "2024", "v": "/year/2024" }, { "n": "2023", "v": "/year/2023" }, { "n": "2022", "v": "/year/2022" }, { "n": "2021", "v": "/year/2021" }, { "n": "2020", "v": "/year/2020" }, { "n": "2019", "v": "/year/2019" }, { "n": "2018", "v": "/year/2018" }, { "n": "2017", "v": "/year/2017" }, { "n": "2016", "v": "/year/2016" }, { "n": "2015", "v": "/year/2015" }, { "n": "2014", "v": "/year/2014" }, { "n": "2013", "v": "/year/2013" }, { "n": "2012", "v": "/year/2012" }, { "n": "2011", "v": "/year/2011" }, { "n": "2010", "v": "/year/2010" }] }, { "key": "lang", "name": "语言", "value": [{ "n": "全部", "v": "" }, { "n": "英语", "v": "/lang/英语" }, { "n": "法语", "v": "/lang/法语" }, { "n": "国语", "v": "/lang/国语" }, { "n": "粤语", "v": "/lang/粤语" }, { "n": "日语", "v": "/lang/日语" }, { "n": "韩语", "v": "/lang/韩语" }, { "n": "泰语", "v": "/lang/泰语" }, { "n": "德语", "v": "/lang/德语" }, { "n": "俄语", "v": "/lang/俄语" }, { "n": "闽南语", "v": "/lang/闽南语" }, { "n": "丹麦语", "v": "/lang/丹麦语" }, { "n": "波兰语", "v": "/lang/波兰语" }, { "n": "瑞典语", "v": "/lang/瑞典语" }, { "n": "印地语", "v": "/lang/印地语" }, { "n": "挪威语", "v": "/lang/挪威语" }, { "n": "意大利语", "v": "/lang/意大利语" }, { "n": "西班牙语", "v": "/lang/西班牙语" }] }, { "key": "by", "name": "排序", "value": [{ "n": "时间", "v": "/by/time" }, { "n": "人气", "v": "/by/hits" }, { "n": "评分", "v": "/by/score" }] }],
        "2": [{ "key": "cateId", "name": "类型", "value": [{ "n": "全部", "v": "2" }, { "n": "国产剧", "v": "13" }, { "n": "港台剧", "v": "14" }, { "n": "泰国剧", "v": "20" }, { "n": "海外剧", "v": "21" }, { "n": "日韩剧", "v": "15" }, { "n": "欧美剧", "v": "16" }] }, { "key": "year", "name": "年份", "value": [{ "n": "全部", "v": "" }, { "n": "2024", "v": "/year/2024" }, { "n": "2023", "v": "/year/2023" }, { "n": "2022", "v": "/year/2022" }, { "n": "2021", "v": "/year/2021" }, { "n": "2020", "v": "/year/2020" }, { "n": "2019", "v": "/year/2019" }, { "n": "2018", "v": "/year/2018" }, { "n": "2017", "v": "/year/2017" }, { "n": "2016", "v": "/year/2016" }, { "n": "2015", "v": "/year/2015" }, { "n": "2014", "v": "/year/2014" }, { "n": "2013", "v": "/year/2013" }, { "n": "2012", "v": "/year/2012" }, { "n": "2011", "v": "/year/2011" }, { "n": "2010", "v": "/year/2010" }] }, { "key": "lang", "name": "语言", "value": [{ "n": "全部", "v": "" }, { "n": "国语", "v": "/lang/国语" }, { "n": "英语", "v": "/lang/英语" }, { "n": "粤语", "v": "/lang/粤语" }, { "n": "闽南语", "v": "/lang/闽南语" }, { "n": "韩语", "v": "/lang/韩语" }, { "n": "日语", "v": "/lang/日语" }, { "n": "其它", "v": "/lang/其它" }] }, { "key": "by", "name": "排序", "value": [{ "n": "时间", "v": "/by/time" }, { "n": "人气", "v": "/by/hits" }, { "n": "评分", "v": "/by/score" }] }],
        "14": [{ "key": "cateId", "name": "类型", "value": [{ "n": "全部", "v": "2" }, { "n": "国产剧", "v": "13" }, { "n": "港台剧", "v": "14" }, { "n": "泰国剧", "v": "20" }, { "n": "海外剧", "v": "21" }, { "n": "日韩剧", "v": "15" }, { "n": "欧美剧", "v": "16" }] }, { "key": "year", "name": "年份", "value": [{ "n": "全部", "v": "" }, { "n": "2024", "v": "/year/2024" }, { "n": "2023", "v": "/year/2023" }, { "n": "2022", "v": "/year/2022" }, { "n": "2021", "v": "/year/2021" }, { "n": "2020", "v": "/year/2020" }, { "n": "2019", "v": "/year/2019" }, { "n": "2018", "v": "/year/2018" }, { "n": "2017", "v": "/year/2017" }, { "n": "2016", "v": "/year/2016" }, { "n": "2015", "v": "/year/2015" }, { "n": "2014", "v": "/year/2014" }, { "n": "2013", "v": "/year/2013" }, { "n": "2012", "v": "/year/2012" }, { "n": "2011", "v": "/year/2011" }, { "n": "2010", "v": "/year/2010" }] }, { "key": "lang", "name": "语言", "value": [{ "n": "全部", "v": "" }, { "n": "国语", "v": "/lang/国语" }, { "n": "英语", "v": "/lang/英语" }, { "n": "粤语", "v": "/lang/粤语" }, { "n": "闽南语", "v": "/lang/闽南语" }, { "n": "韩语", "v": "/lang/韩语" }, { "n": "日语", "v": "/lang/日语" }, { "n": "其它", "v": "/lang/其它" }] }, { "key": "by", "name": "排序", "value": [{ "n": "时间", "v": "/by/time" }, { "n": "人气", "v": "/by/hits" }, { "n": "评分", "v": "/by/score" }] }],
        "3": [{ "key": "cateId", "name": "类型", "value": [{ "n": "全部", "v": "3" }, { "n": "国内综艺", "v": "27" }, { "n": "港台综艺", "v": "26" }, { "n": "韩日综艺", "v": "25" }, { "n": "欧美综艺", "v": "24" }] }, { "key": "year", "name": "年份", "value": [{ "n": "全部", "v": "" }, { "n": "2024", "v": "/year/2024" }, { "n": "2023", "v": "/year/2023" }, { "n": "2022", "v": "/year/2022" }, { "n": "2021", "v": "/year/2021" }, { "n": "2020", "v": "/year/2020" }, { "n": "2019", "v": "/year/2019" }, { "n": "2018", "v": "/year/2018" }, { "n": "2017", "v": "/year/2017" }, { "n": "2016", "v": "/year/2016" }, { "n": "2015", "v": "/year/2015" }, { "n": "2014", "v": "/year/2014" }, { "n": "2013", "v": "/year/2013" }, { "n": "2012", "v": "/year/2012" }, { "n": "2011", "v": "/year/2011" }, { "n": "2010", "v": "/year/2010" }] }, { "key": "lang", "name": "语言", "value": [{ "n": "全部", "v": "" }, { "n": "国语", "v": "/lang/国语" }, { "n": "英语", "v": "/lang/英语" }, { "n": "粤语", "v": "/lang/粤语" }, { "n": "闽南语", "v": "/lang/闽南语" }, { "n": "韩语", "v": "/lang/韩语" }, { "n": "日语", "v": "/lang/日语" }, { "n": "其它", "v": "/lang/其它" }] }, { "key": "by", "name": "排序", "value": [{ "n": "时间", "v": "/by/time" }, { "n": "人气", "v": "/by/hits" }, { "n": "评分", "v": "/by/score" }] }],
        "4": [{ "key": "cateId", "name": "类型", "value": [{ "n": "全部", "v": "4" }, { "n": "国内动漫", "v": "28" }, { "n": "韩日动漫", "v": "29" }, { "n": "港台动漫", "v": "30" }, { "n": "海外动漫", "v": "61" }, { "n": "欧美动漫", "v": "32" }] }, { "key": "year", "name": "年份", "value": [{ "n": "全部", "v": "" }, { "n": "2024", "v": "/year/2024" }, { "n": "2023", "v": "/year/2023" }, { "n": "2022", "v": "/year/2022" }, { "n": "2021", "v": "/year/2021" }, { "n": "2020", "v": "/year/2020" }, { "n": "2019", "v": "/year/2019" }, { "n": "2018", "v": "/year/2018" }, { "n": "2017", "v": "/year/2017" }, { "n": "2016", "v": "/year/2016" }, { "n": "2015", "v": "/year/2015" }, { "n": "2014", "v": "/year/2014" }, { "n": "2013", "v": "/year/2013" }, { "n": "2012", "v": "/year/2012" }, { "n": "2011", "v": "/year/2011" }, { "n": "2010", "v": "/year/2010" }] }, { "key": "lang", "name": "语言", "value": [{ "n": "全部", "v": "" }, { "n": "国语", "v": "/lang/国语" }, { "n": "英语", "v": "/lang/英语" }, { "n": "粤语", "v": "/lang/粤语" }, { "n": "闽南语", "v": "/lang/闽南语" }, { "n": "韩语", "v": "/lang/韩语" }, { "n": "日语", "v": "/lang/日语" }, { "n": "其它", "v": "/lang/其它" }] }, { "key": "by", "name": "排序", "value": [{ "n": "时间", "v": "/by/time" }, { "n": "人气", "v": "/by/hits" }, { "n": "评分", "v": "/by/score" }] }],
        "22": [{ "key": "area", "name": "地区", "value": [{ "n": "全部", "v": "" }, { "n": "大陆", "v": "/index.php/vod/show/area/大陆/id/22" }, { "n": "韩国", "v": "/index.php/vod/show/area/韩国/id/22" }, { "n": "香港", "v": "/index.php/vod/show/area/香港/id/22" }, { "n": "台湾", "v": "/index.php/vod/show/area/台湾/id/22" }, { "n": "美国", "v": "/index.php/vod/show/area/美国/id/22" }, { "n": "其它", "v": "/index.php/vod/show/area/其它/id/22" }] }, { "key": "year", "name": "年份", "value": [{ "n": "全部", "v": "" }, { "n": "2024", "v": "/year/2024" }, { "n": "2023", "v": "/year/2023" }, { "n": "2022", "v": "/year/2022" }, { "n": "2021", "v": "/year/2021" }, { "n": "2020", "v": "/year/2020" }, { "n": "2019", "v": "/year/2019" }, { "n": "2018", "v": "/year/2018" }, { "n": "2017", "v": "/year/2017" }, { "n": "2016", "v": "/year/2016" }, { "n": "2015", "v": "/year/2015" }, { "n": "2014", "v": "/year/2014" }, { "n": "2013", "v": "/year/2013" }, { "n": "2012", "v": "/year/2012" }, { "n": "2011", "v": "/year/2011" }, { "n": "2010", "v": "/year/2010" }] }, { "key": "lang", "name": "语言", "value": [{ "n": "全部", "v": "" }, { "n": "国语", "v": "/lang/国语" }, { "n": "英语", "v": "/lang/英语" }, { "n": "粤语", "v": "/lang/粤语" }, { "n": "闽南语", "v": "/lang/闽南语" }, { "n": "韩语", "v": "/lang/韩语" }, { "n": "日语", "v": "/lang/日语" }, { "n": "其它", "v": "/lang/其它" }] }, { "key": "by", "name": "排序", "value": [{ "n": "时间", "v": "/by/time" }, { "n": "人气", "v": "/by/hits" }, { "n": "评分", "v": "/by/score" }] }]
    },
    filter_def: {
        1: { cateId: '1' },
        2: { cateId: '2' },
        14: { cateId: '14' },
        3: { cateId: '3' },
        4: { cateId: '4' },
        22: { cateId: '22' }
    },
    searchUrl: '/index.php/vod/search/page/fypage/wd/**.html',
    searchable: 2,//是否启用全局搜索,
    quickSearch: 0,//是否启用快速搜索,
    headers: {
        'User-Agent': 'PC_UA',
    },
    class_parse: 'ul.menu li:gt(0):lt(7);a&&Text;a&&href;/(\\d+).html',
    play_parse: true,
    lazy: `js:
        var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
        var url = html.url;
        if (html.encrypt == '1') {
            url = unescape(url)
        } else if (html.encrypt == '2') {
            url = unescape(base64Decode(url))
        }
        if (/\\.m3u8|\\.mp4/.test(url)) {
            input = {
                jx: 0,
                url: url,
                parse: 0
            }
        } else {
            input
        }
    `,
    limit: 6,
    推荐: '*',
    // double: true, // 推荐内容是否双层定位
    一级: '.shoutu-vodlist li;a&&title;.lazyload&&data-original;.text&&Text;a&&href',
    二级: {
        "title": "h1&&Text;.tag&&Text",
        "img": ".shadow&&img&&data-original",
        "desc": ".data:eq(2)&&Text;;;.data--span:eq(0)&&Text;.data--span:eq(1)&&Text",
        "content": ".desc--span&&Text",
        "tabs": ".panel-hd:eq(1) h3",
        "lists": ".shoutu-playlist:eq(#id) li"
    },
    搜索: '*',
}