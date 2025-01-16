var rule = {
  title: '播剧影视网',
  host: 'https://www.boju.cc',
  url: '/vodshow/fyclass--------fypage---.html',
  searchUrl: '/vodsearch/page/fypage/wd/**.html',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  headers: {
    'User-Agent': 'PC_UA'
  },
  class_parse: '.head-nav li:gt(0):lt(7);a&&Text;a&&href;/vodtype/(.*)\.html',
  play_parse: true,
  lazy: "js:\n let html = request(input);\n let hconf = html.match(/r player_.*?=(.*?)</)[1];\n let json = JSON5.parse(hconf);\n let url = json.url;\n if (json.encrypt == '1') {\n url = unescape(url);\n } else if (json.encrypt == '2') {\n url = unescape(base64Decode(url));\n }\n if (/\\.(m3u8|mp4|m4a|mp3)/.test(url)) {\n input = {\n parse: 0,\n jx: 0,\n url: url,\n };\n } else {\n input;\n }",
  limit: 6,
  double: true,
  推荐: 'div.wow div.public-list-box;div.public-list-div;a&&title;img&&data-original;span:eq(1)&&Text;a&&href;span:eq(2)&&Text',
  一级: 'div.module a.module-item;a&&title;img&&data-original;div.module-item-note&&Text;a&&href',
  二级: {
    title: '.module-info-heading h1&&Text;.module-info-tag-link:eq(2) a&&Text',
    img: '.module-item-pic img&&data-original',
    desc: '.module-info-item:eq(3)&&Text;.module-info-tag-link:eq(0) a&&Text;.module-info-tag-link:eq(1) a&&Text;.module-info-item:eq(2)&&Text;.module-info-item:eq(1) a&&Text',
    content: '.content&&Text',
    tabs: '.module-tab-items-box',
    lists: '.module-play-list-content a'
  },
  搜索: 'div.module-card-item;div.module-card-item-title a&&Text;img.lazyload&&data-original;.module-item-note&&Text;a&&href;.module-info-item-content:eq(0)&&Text'
}
