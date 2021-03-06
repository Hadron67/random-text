(function(data){
    typeof exports === 'object' && typeof module !== 'undefined' ? (module.exports = data) :
    grammarLoader.part(data);
})({
    'start': '<sentence>',
    'sentence': [
        '@5 <subject><action-sentence>',
        '@4 <time-clause>，<subject><action-sentence-without-time>',
        '<news-verb><subject><speak>',
        '<news-verb><subject><adv-modifier><verb>。'
    ],
    'action-sentence': [
        '<speak>',
        '一边<verb>一边<verb>。',
        '一边<verb>一边<speak>',
        '<verb-modal><speak>',
        '宁愿<adv-modifier-without-time><verb-present>，也不想<adv-modifier><verb-present>。',
        '希望<adv-modifier-without-time><verb-present>，但最后不得不<adv-modifier><verb>。',
        '<verb-modal><adv-modifier><verb-present>。',
        '<adv-modifier><verb>，然后<adv-modifier><verb>。',
        '<adv-modifier><verb>，然后<speak>',
        '在<subject>的<position><verb>。',
        '骑在<subject>的<body-part><verb>。',
        '努力让<subject><adv-modifier><verb-present>。',
        '拿着<weapon-like>威胁<subject>，要他<adv-modifier-with-time-clause><verb-present>。',
        '<adv-modifier><verb>。'
    ],
    'action-sentence-without-time': [
        '<speak>',
        '一边<verb>一边<verb>。',
        '一边<verb>一边<speak>',
        '宁愿<verb-present>，也不想<verb-present>。',
        '希望<verb-present>，但最后不得不<verb>。',
        '<adv-modifier-without-time><verb>，然后<adv-modifier-without-time><verb>。',
        '<adv-modifier-without-time><verb>，然后<speak>',
        '在<subject>的<position><verb>。',
        '骑在<subject>的<body-part><verb>。',
        '努力让<subject><adv-modifier><verb-present>。',
        '拿着<weapon-like>威胁<subject>，要他<adv-modifier-with-time-clause><verb-present>。',
        '<adv-modifier-without-time><verb>。'
    ],
    'subject': [
        '<person>',
        '刚刚<adv-modifier-without-time><verb>的<person>',
        '@2 <verb-modal><adv-modifier><verb-present>的<person>'
    ],
    'time-clause': [
        '当<subject><verb-perfect>时',
        '就在<subject><verb-perfect>时',
        '在<subject><verb-perfect>之前'
    ],
    'speak': '<verb-speak>：<speak-content>',
    'class': [
        '语文', 
        '数学', 
        '英语', 
        '物理', 
        '化学', 
        '生物', 
        '微积分', 
        '线性代数', 
        '概率论', 
        '通用技术',
        '军事理论', 
        '近代史', 
        '马哲', 
        '毛概', 
        '数据结构', 
        '编译原理', 
        '电动力学', 
        '统计力学', 
        '复变函数',
        '数理方程', 
        '量子力学', 
        '电磁场',
        '形势与政策',
        '美术',
        '地理',
        '音乐',
        '思想品德',
        '体育',
        '选修',
        '计算机网络'
    ],
    'person': [
        "netrol",
        "黄大仙",
        "细胞",
        "伟萨",
        "韶华",
        "吴大右",
        "包子",
        "晟鬼",
        "喜欢喝冰红茶的某人",
        "彪娃",
        "小弟",
        "生活老师",
        "妖娆哥",
        "王铭章",
        "旗旗",
        "李明",
        "温神",
        "通用技术老师",
        "雀妈",
        "女人",
        "Daass",
        "黑蛋",
        "何二B",
        "苯丙氨酸",
        "显性纯合",
        "Black Five",
        "Lyrics",
        "町哥",
        "顺发",
        "张世明",
        "飞机",
        "有为",
        "张春晖",
        "胡宇",
        "邝元霄",
        "野田",
        "安倍",
        "金三胖",
        "奥巴马",
        "芽儿",
        "DQ",
        "WJ",
        "囗囗部部长",
        "某囗囗部员",
        "小组长",
        "QD",
        "ZZY",
        "阿波",
        "李云龙",
        "年级第一",
        "全班第一",
        "年级总是第三十一名的学生",
        "[匿名]",
        "等生",
        "抖森",
        "教民",
        "教父",
        "大主教",
        "石锅老板",
        "小主教",
        "巨婴",
        "卢蛋",
        "刘旭东",
        "freemerze",
        "何肥",
        "表表机器人",
        "云天明",
        "罗辑",
        "非生物",
        "程心",
        "刘慈欣",
        "Orgb"
    ],//a
    'place': [
        "教室里",
        "鲤鱼所里",
        "Oak大业余无线电协会",
        "山东山大鸥玛科技有限公司",
        "谷歌总部",
        "阿里巴巴总部",
        "东海海底",
        "东海教会里",
        "操场上",
        "游乐园里",
        "大巴车里",
        "干洗店里",
        "干杂店里",
        "军事法庭上",
        "过山车里",
        "石象湖底",
        "女子十米跳台上",
        "囗囗部里",
        "座位上",
        "飞机上",
        "火车车厢连接处",
        "留尼旺岛马航残骸旁",
        "秦始皇墓里",
        "两千米深钻井底部",
        "国际空间站里",
        "天宫一号里",
        "地月拉格朗日点上",
        "日地拉格朗日点上",
        "哈雷彗星上",
        "银河系中心",
        "大质量黑洞旁",
        "旋转黑洞的能层里",
        "珠峰大本营里",
        "高铁隧道里",
        "医院太平间里",
        "医院手术室里",
        "ICU病房里",
        "洗衣机里",
        "微波炉里",
        "树梢上",
        "衣柜里",
        "厕所里",
        "办公室里",
        "珠穆朗玛峰顶",
        "天安门广场前",
        "火车站候车厅",
        "食堂",
        "大英博物馆",
        "建筑工地上",
        "铺盖窝里",
        "埃菲尔铁塔顶",
        "凯旋门面前",
        "百慕大三角上空",
        "天桥上",
        "天桥底下",
        "钓鱼岛的海边",
        "公共汽车上",
        "地铁上",
        "地下停车场",
        "电脑面前",
        "月球上",
        "一大片西瓜地旁",
        "火星上",
        "木星上",
        "金星上",
        "水星上",
        "土星上",
        "公共汽车的老弱病残孕座位上",
        "英国某南部小镇",
        '@ <class>课上'
    ],
    'place-time': [
        "奥运会领奖台上",
        "万隆会议上",
        "皎洁的月光下",
        "春晚舞台上"
    ],
    'time': [
        '午夜0点',
        '高考后'
    ],
    'adv-modifier': [
        "<adv-modifier-without-time>",
        "<time>在<place>",
        "在<time>",
        "在<subject>的<position>"
    ],//b
    'adv-modifier-without-time': [
        "",
        "用跑操的时间",
        "用吃饭的时间",
        "跑到操场上",
        "拿着蓝翔的毕业证",
        "@ 在<place-time>",
        "@ 在<place>"
    ],
    'adv-modifier-with-time-clause': [
        '@3 <adv-modifier>',
        '<time-clause>'
    ],
    'verb': [
        "@ <verb-present>",
        "@ <verb-perfect>",
        "@ <verb-passive>"
    ],//c
    'verb-present': [
        "涂唇膏",
        "跳蜡笔小新舞",
        "吸食白粉",
        "绕操场跑",
        "当大等生",
        "举办记者招待会",
        "举办新闻发布会",
        "听收音机",
        "闻臭氧有多臭",
        "模拟进行太空授课",
        "画自画像",
        "找UFO",
        "找失散多年的亲弟弟",
        "贩卖儿童",
        "走私枪支弹药",
        "舔棒棒糖",
        "对着电脑发呆",
        "翻起白眼",
        "咬自己的舌头",
        "把自己变成<animal>",
        "弹起心爱的旧琵琶",
        "偷自行车",
        "写作文",
        "讲故事",
        "连不上WIFI，心急如焚",
        "切断所有静脉",
        "切断所有动脉",
        "割断气管",
        "得小儿麻痹症",
        "吹起口哨",
        "拉小提琴",
        "搓澡",
        "大口大口吃醋",
        "学习马列主义",
        "学习毛泽东思想",
        "贯彻三个代表的精神",
        "认真贯彻落实科学发展观",
        "烧光头发",
        "用胶带封住嘴",
        "一瘸一拐慢慢往前挪动",
        "行使合法权益",
        "证明哥德巴赫猜想",
        "跳进化粪池",
        // "回答了问题，为小组加了2分",
        "紧张地进行有丝分裂",
        "紧张地进行脱分化",
        "紧张地进行无丝分裂",
        "用<drink-noun>洗脸",
        "用<drink-noun>洗脚",
        "用<drink-noun>漱口",
        "赶作业",
        "踢足球",
        "睡觉",
        "面壁思过",
        "悟笔记",
        "啃鸡腿",
        "把嘴巴闭到",
        "听摇滚乐",
        "细细回味辣条",
        "开挖掘机",
        // "耍手机",
        "说带着浓重地方口音的<lang>",
        "吸毒",
        "看学案",
        "看着手机发呆",
        "发动信仰之跃",
        "试图在岩浆里游泳",
        "@3 在<mc-server>里搭建<mc-structure>",
        "@3 在<mc-server>里挖<mc-block>",
        "@ 唱<sing-noun>",
        "@ 做<do-noun>",
        '@ 看<watch-noun>',
        '@ 玩<play-noun>',
        "@ 吃<eat-noun>",
        "@ 喝<drink-noun>",
        "@ 打<hit-noun>",
        '@ 拿出《<book>》',
    ],
    'verb-perfect': [
        "涂了唇膏",
        "跳了蜡笔小新舞",
        "吸食了白粉",
        "绕操场跑了三十圈",
        "当了大等生",
        "举办了记者招待会",
        "举办了新闻发布会",
        "闻了臭氧有多臭",
        "画了一幅自画像",
        "找到了UFO",
        "找到了失散多年的亲弟弟",
        "贩卖了儿童",
        "走私了枪支弹药",
        "对着电脑发了呆",
        "翻起了白眼",
        "咬到了自己的舌头",
        "把自己变成了<animal>",
        "弹起了心爱的旧琵琶",
        "偷了自行车",
        "写完了作文",
        "讲完了故事",
        "连不上了WIFI，心急如焚",
        "切断了所有静脉",
        "切断了所有动脉",
        "割断了气管",
        "得了小儿麻痹症",
        "吹起了口哨",
        "拉了小提琴",
        "搓完了澡",
        "大口大口吃完了醋",
        "学习了马列主义",
        "学习了毛泽东思想",
        "贯彻了三个代表的精神",
        "认真贯彻落实了科学发展观",
        "烧光了头发",
        "用胶带封住了嘴",
        "一瘸一拐慢慢挪动到了<place>",
        "行使了合法权益",
        "证明了哥德巴赫猜想",
        "跳进了化粪池",
        "回答了问题，为小组加了2分",
        "紧张地完成了有丝分裂",
        "紧张地完成了脱分化",
        "紧张地完成了无丝分裂",
        "用浓硫酸洗了脸",
        "用王水洗了脚",
        "赶完了作业",
        "睡了觉",
        "悟了笔记",
        "啃完了鸡腿",
        "把嘴巴闭到了",
        "听完了摇滚乐",
        "细细回味了辣条",
        "开了挖掘机",
        // "耍手机",
        "说了带着浓重地方口音的<lang>",
        "吸了毒",
        "看学案，但实在无聊睡着了",
        "对着手机发了呆",
        "<chute-reason>发动了信仰之跃",
        "<chute-reason>试图在岩浆里游了泳",
        "@3 在<mc-server>里搭建了<mc-structure>",
        "@3 在<mc-server>里挖到了<mc-block>",
        "@ 唱起了<sing-noun>",
        "@ 做了<do-noun>",
        '@ 看了<watch-noun>',
        '@ 玩了<play-noun>',
        "@ 吃了<eat-noun>",
        "@ 喝了<drink-noun>",
        "@ 打了<hit-noun>",
        '@ 拿出了《<book>》',
    ],
    'verb-passive': [
        "被仙人掌扎成了刺猬"
    ],
    'chute-reason': [
        '',
        '为躲避TNT的爆炸而',
        '为躲避<person>的攻击而',
        '为躲避<mc-mob>的攻击而'
    ],
    'animal': [
        '一头猪',
        '一头狗熊',
        '一只狗',
        '一只猫',
        '一只鸡',
        '一只鸭',
        '一头大象',
        '一只黑猩猩',
        '一只长臂猿',
        '一只狒狒'
    ],
    'watch-noun': [
        '小说',
        '新闻联播',
        '书',
        '喜羊羊与灰太狼',
        '智慧树',
        '猫和老鼠',
        '海绵宝宝',
        '日全食',
        '国足',
        '<person>跳舞',
        '物理实验视频',
        '天线宝宝',
        '蜡笔小新',
        '动画片',
        '@ 《<movie>》',
    ],
    'play-noun': [
        "agar.io",
        "贪吃蛇",
        "回收大战",
        "扫雷",
        "老鹰捉小鸡",
        "俄罗斯方块",
        "复杂长难句生成器",
        "2048",
        "MC",
        "Golly",
        "cursor.io",
        '手机'
    ],
    'eat-noun': [
        "锅盔",
        "糖丸",
        "宝宝霜",
        "苏丹红",
        "僵尸肉",
        "腐肉",
        "翔",
        "洗衣粉",
        "饭",
        "土豆",
        "毒马铃薯",
        "附魔金苹果",
        "蘑菇煲",
        "兔肉煲",
        "蛋糕",
        "金坷拉",
        "石锅",
        "烩面",
        "虾饺",
        "鲱鱼罐头"
    ],
    'mc-block': [
        "土方块",
        "粘液块",
        "黑曜石",
        "钻石原矿",
        "灵魂沙",
        "红石矿",
        "青金石矿",
        "煤矿",
        "骨块",
        "沙子",
        "枯萎的灌木",
        "经验球",
        "基岩",
        "虚空",
        "废弃矿井",
        "海底隧道",
        "@ <mc-mob>刷怪笼",
    ],
    'mc-mob': [
        "爬行者",
        "高压爬行者",
        "僵尸",
        "骷髅",
        "女巫",
        "烈焰人",
        "僵尸猪人",
        "村民",
        "Herobrine",
        "火柴人",
        "末影龙",
        "末影螨",
        "蠹虫",
        "远古守卫者",
        "凋零骷髅"
    ],
    'mc-position': [
        "脚下的",
        "头顶上的",
        "<person>脚下的",
        "<person>头顶上的"
    ],
    'do-noun': [
        "眼保健操",
        "引体向上",
        "俯卧撑",
        "无规则布朗运动",
        "<organ>移植手术",
        "<organ>切除手术",
        "脊蛙反射实验",
        "指纹识别",
        "DNA鉴定",
        "下蹲",
        "“CuO的正交分解”实验",
        "“魂断盐桥”实验", 
    ],
    'organ':[
        "大脑",
        "小脑",
        "脑干",
        "肾脏",
        "心脏",
        "膀胱",
        "胰腺",
        "胆囊",
        "肝脏",
        "阑尾",
        "十二指肠",
        "脊髓",
        "垂体",
        "气管"
    ],
    'sing-noun': [
        "字母歌",
        "情歌",
        "少先队队歌",
        "黑猫警长",
        "葫芦娃",
        "义勇军进行曲",
        "土耳其进行曲",
        "难忘今宵",
        "克罗地亚狂想曲"
    ],
    'drink-noun': [
        "冰红茶",
        "氯水",
        "王水",
        "马尿",
        "二锅头",
        "镪水",
        "硫酸铜溶液",
        "硝酸银溶液",
        "高锰酸钾",
        "重铬酸钾",
        "止咳糖浆",
        "秋水仙素",
        "娃哈哈",
        "营养快线",
        "可乐",
        "三鹿奶粉",
        "黑芝麻糊",
        "洗脚水",
        "重水",
        "浓硫酸"
    ],
    'hit-noun': [
        "麻将",
        "三国杀",
        "狼人杀",
        "Uno",
        "游戏",
        "干瞪眼",
        "斗地主",
        "篮球",
        "排球",
        "乒乓球",
    ],
    'lang': [
        '英语',
        '日语',
        '法语',
        '德语',
        '西班牙语',
        '葡萄牙语',
        '意大利语',
        '阿拉伯语'
    ],
    "mc-server": [
        "生存3服",
        "手艺服",
        "建筑服",
        "新大陆",
        "空岛世界",
        "审核之地",
        "生存界",
        "创造界"
    ],
    "mc-structure": [
        "红石电梯",
        "高频红石电路",
        "红石计算机",
        "全自动农场",
        "自动收甘蔗机",
        "简易火柴盒避难所",
        "火车站",
        "脑膜炎纪念馆",
        "过山车",
        "永久水源",
        "小麦田",
        "萝卜田",
        "地狱疣田",
        "挂机池",
        "刷怪塔",
        "刷石机"
    ],
    'verb-speak': [
        "大声吼道",
        "疑神疑鬼地说",
        "感叹道",
        "轻声地说",
        "拿着喇叭，并对着说",
        "边哭边说",
        "在全国人民代表大会上发言",
        "当着全校在主席台上说",
        "在HitBoard上写道",
        "在自己的学案上写道",
        "在<person>的学案上写道",
        "在作文本上写道",
        "在媒体面前公然宣言",
        "口中振振有词地说",
        "面不改色心不跳地说",
        "皮笑肉不笑地说",
        "在批斗大会上邪恶地说",
        "在餐厅里突然高声说",
        "在弥留之际说道",
        "在高考考试时大声说",
        "对着猪圈说",
        "在街上吆喝",
        "在朋友圈里说道",
        "在说说里写道",
        "背着党和国家说道",
        "回眸一笑，轻声说道",
        "当众喊道"
    ],//d
    'speak-content': [
        "@ “<speak-text>”",
        "“我走了……请你们……一定要为……我……报……仇！”（死）"
    ],
    'speak-text': [
        "我一定会回来的！",
        "我只有和<animal>有共同语言！",
        "我想<verb-present>",
        "我不想星期天晚上考数学！",
        "不要迷恋我，我只是个传说！",
        "我强烈要求每天晚自习看电影！",
        "脑壳有乒乓嗦！",
        "我不想上第四节晚自习！",
        "我不是人！",
        "我想撞墙！",
        "打死我也不说！",
        "你可以Die了！",
        "我撞墙我选择！",
        "我跳楼我选择！",
        "我很独裁啊~",
        "我是猪我选择！",
        "人才啊！",
        "我真的想吐槽！",
        "不晓得为啥子……-……",
        "我控诉！",
        "傻爆了！",
        "死变态！",
        "这个烟花不是为我而放！",
        "我已经对生活失去希望了！",
        "妖精，哪里逃！",
        "统统锁迩大主教写法！",
        "我就是猴子请来的那个逗逼！",
        "听说飞机脑膜炎又犯了。",
        "你爷爷在此！",
        "世界那么大，我想去看看。",
        "我骄傲！",
        "糟了糟了，没落了。",
        "消灭人类暴政，世界属于三体！",
        "只送大脑！",
        "I'd rather not say.",
        "So you married her.",
        "you know,the ugly one."
    ],//e
    'verb-modal': [
        "总是梦想着有一天能",
        "一直都希望",
        "天天都想",
        "躺在床上闭着眼睛想",
        "在看学案时偷偷地想",
        "认为自己一定能",
        "相信自己能够",
        "坚持了21天，终于能",
        "在外打拼多年，终于可以",
        "觉得自己早该",
        "经多年的实地考察，终于可以放心地",
        "装了很久的逼，才",
        "积了大半辈子的德，才",
        "花光了所有的积蓄，才"
    ],//f
    'news-verb': [
        "新华社消息：",
        "据民间传闻，",
        "美联社报道：",
        "这个寓言故事的大意就是说，",
        "据有关部门透露：",
        "相关人士向记者透露：",
        "下面请看一则简讯：",
        "权威机构发布消息：",
        "据史料记载："
    ],//g
    'position': [
        '前面', 
        '背后'
    ],
    'body-part': [
        '肩上', 
        '背上', 
        '腿上'
    ],
    'weapon-like': [
        "核弹", 
        "匕首", 
        "电蚊拍", 
        "苍蝇拍", 
        "三星Note7", 
        "手榴弹", 
        "榴莲"
    ],
    'movie': [
        '唐之韵', 
        '星球大战',
        "百家讲坛",
        '蜘蛛侠',
        "独立日",
        "风雨哈佛路",
        "美丽人生",
        "肖申克的救赎",
        "地心毁灭"
    ],
    'book': [
        '名师一号', 
        '红对钩', 
        '课时优化', 
        '文科爱好者', 
        '理科爱好者', 
        '天府数学', 
        '无机化学',
        '有机化学', 
        '小题狂练',
        '5年高考3年模拟',
        '5年中考3年模拟', 
        '典中点', 
        'An Introduction to Quantum Field Theory', 
        '吉米多维奇数学分析习题集',
        '量子力学习题精选与剖析',
        '高等数学证明题500例解析',
        '钢琴集体课教程',
        '简明法语教程',
        '微分几何入门与广义相对论',
        '简明量子场论',
        '粒子物理导论',
        '物理学中的群论',
        '母猪的产后护理',
        '高电压绝缘技术',
        "场的统计物理",
        "微分流形与李群",
        "Unix网络编程",
        "Nodejs设计模式",
        "Python科学计算",
        "计算机原理与设计——Verilog HDL版",
        "三体1——地球往事",
        "三体2——黑暗森林",
        "三体3——死神永生",
        "三体x——观想之宙",
        "球状闪电",
        "巴黎圣母院",
        "超新星纪元"
    ]
});