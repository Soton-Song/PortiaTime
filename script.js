// 数据部分
const data = {
  characters: [
    {
    "character": "许医生",
    date: "4月4日",
    preferences: {
      favorite: [
        { item: "持刀玩偶", points: 20 },
        { item: "西兰花王冠", points: 18 },
        { item: "气球饮料瓶", points: 15 },
        { item: "精钢小铲子", points: 15 },
        { item: "东漫游记", points: 15 },
        { item: "橙色沙发", points: 15 },
        { item: "深思者", points: 15 },
        { item: "神灯", points: 12 },
        { item: "神奇玻璃罐", points: 12 },
        { item: "酱烤鲑鱼片", points: 10 },
        { item: "玫瑰花", points: 10 },
        { item: "椰汁牛排", points: 10 },
        { item: "锥形壁灯", points: 10 }
      ],
      like: [
        { item: "护身符", points: 8 },
        { item: "红宝石", points: 8 },
        { item: "药汁", points: 6 },
        { item: "草药泥", points: 6 },
        { item: "简易药膏", points: 6 },
        { item: "苹果汁", points: 3 },
        { item: "蘑菇炖肉", points: 3 },
        { item: "解毒草", points: 2 },
        { item: "草药", points: 2 },
        { item: "白色木槿花", points: 2 }
      ]
    }
  },
  {
    "character": "盖斯特",
    date: "2月11日",
    preferences: {
      favorite: [
        { item: "三层书柜", points: 30 },
        { item: "双层斗柜", points: 30 },
        { item: "壁炉", points: 25 },
        { item: "猫头鹰钟", points: 20 },
        { item: "挂壁花篮", points: 18 },
        { item: "培根刃鱼卷", points: 15 },
        { item: "三种建筑书", points: 15 },
        { item: "格子地毯", points: 15 },
        { item: "飞机模型", points: 15 },
        { item: "深思者", points: 15 },
        { item: "红菇刃鱼粥", points: 15 },
        { item: "帆船模型", points: 12 },
        { item: "雨伞", points: 12 },
        
      ],
      like: [
        { item: "红宝石", points: 8 },
        { item: "高脚玻璃杯", points: 6 },
        { item: "香水苹果", points: 6 },
        { item: "盐烤跳鱼", points: 6 },
        { item: "咸咸的杂烩", points: 6 },
        { item: "蓝宝石", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
        { item: "松果", points: 2 }
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "明特",
    date: "1月1日",
    preferences: {
      favorite: [
        { item: "按摩椅", points: 30 },
        { item: "画作:织女星5号", points: 30 },
        { item: "小型铁艺花架", points: 25 },
        { item: "机器人雕塑", points: 20 },
        { item: "实木长沙发", points: 20 },
        { item: "梦幻台灯", points: 18 },
        { item: "熏香炉", points: 15 },
        { item: "色王汤", points: 15 },
        { item: "球形奖杯", points: 15 },
        { item: "红菇刃鱼粥", points: 12 },
        { item: "潜水头盔", points: 12 },
        { item: "黄金萝卜羹", points: 12 },
        { item: "怪兽玩偶", points: 10 },
        { item: "玫瑰花", points: 10 }
      ],
      like: [
        { item: "压花地毯", points: 8 },
        { item: "红宝石", points: 8 },
        { item: "奶油鲑鱼汤", points: 7 },
        { item: "多肉盆栽", points: 7 },
        { item: "蓝宝石", points: 5 },
        { item: "刃鱼", points: 4 },
        { item: "金鲑", points: 4 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
        { item: "虾肉", points: 2 },
        { item: "草莓", points: 2 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "艾伯特",
    date: "2月10日",
    preferences: {
      favorite: [
        { item: "鲜红领结", points: 20 },
        { item: "持杖玩偶", points: 20 },
        { item: "三角墨镜", points: 20 },
        { item: "奔马雕塑", points: 15 },
        { item: "金项链", points: 15 },
        { item: "孔雀菊盆栽", points: 15 },
        { item: "潜艇模型", points: 12 },
        { item: "老式电话", points: 12 },
        { item: "玫瑰花", points: 10 },
        { item: "辣味鱼奠", points: 10 }
      ],
      like: [
        { item: "红宝石", points: 8 },
        { item: "香皂", points: 8 },
        { item: "护身符", points: 8 },
        { item: "彩虹花盆栽", points: 6 },
        { item: "野玫瑰盆栽", points: 6 },
        { item: "木雕羊驼", points: 6 },
        { item: "黄色领结", points: 6 },
        { item: "蓝宝石", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
        { item: "石砖", points: 3 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "阿尔洛",
    date: "3月5日",
    preferences: {
      favorite: [
        { item: "合金剑", points: 15 },
        { item: "持矛玩偶", points: 15 },
        { item: "铁剑", points: 15 },
        { item: "拉力器", points: 12 },
        { item: "青铜剑", points: 12 },
        { item: "多功能军刀", points: 12 },
        { item: "火箭模型", points: 12 },
        { item: "帆船模型", points: 12 },
        { item: "海鲜面", points: 12 },
        { item: "便携式腰包", points: 12 },
        { item: "能源灯", points: 10 },
        { item: "辣味鱼羹", points: 10 },
        { item: "疯狂拌面", points: 10 },
      ],
      like: [
        { item: "红宝石", points: 8 },
        { item: "麻辣杂烩", points: 8 },
        { item: "经典肉酱面", points: 6 },
        { item: "蓝宝石", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
        { item: "硬木长剑", points: 3 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "艾米莉",
    date: "1月17日",
    preferences: {
      favorite: [
        { item: "包边地毯", points: 15 },
        { item: "种植指南", points: 15 },
        { item: "招财猫", points: 15 },
        { item: "东漫游记", points: 15 },
        { item: "大剧院", points: 15 },
        { item: "小黄鸡耳环", points: 12 },
        { item: "扇子模型", points: 12 },
        { item: "一串玉米", points: 12 },
        { item: "一串辣椒", points: 12 },
        { item: "玫瑰花", points: 12 },
        { item: "秋娃娃", points: 10 },
        { item: "水果沙拉", points: 10 },
        { item: "南瓜派", points: 10 },
        { item: "春娃娃", points: 10 },
        { item: "稻草人", points: 12 }
      ],
      like: [
        { item: "南瓜焖饭", points: 6 },
        { item: "红宝石", points: 8 },
        { item: "蓝宝石", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
        { item: "鸡蛋", points: 2 },
        { item: "牛奶", points: 2 },
        { item: "肥料", points: 2 },
        { item: "南瓜", points: 2 },
        { item: "草莓", points: 2 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "安托因",
    date: "1月10日",
    preferences: {
      favorite: [
        { item: "猫头鹰钟", points: 20 },
        { item: "白色靠背椅", points: 20 },
        { item: "猫鱼雕塑", points: 15 },
        { item: "招财猫", points: 15 },
        { item: "蓝宝石戒指", points: 15 },
        { item: "小挎包", points: 15 },
        { item: "扇子模型", points: 12 },
        { item: "水果沙拉", points: 10 },
        { item: "玫瑰花", points: 10 },
        { item: "春娃娃", points: 10 },
        { item: "蔬菜沙拉", points: 10 },
      ],
      like: [
        { item: "红宝石", points: 8 },
        { item: "黄色领结", points: 8 },
        { item: "胸针", points: 6 },
        { item: "水晶", points: 6 },
        { item: "画作:女孩", points: 6 },
        { item: "木雕羊驼", points: 6 },
        { item: "香皂", points: 5 },
        { item: "蓝宝石", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "牛奶", points: 2 },
        { item: "贝壳", points: 2 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "李牧师",
    date: "3月9日",
    preferences: {
      favorite: [
        { item: "女神雕像", points: 20 },
        { item: "大剧院", points: 15 },
        { item: "纪念碑", points: 15 },
        { item: "太阳脸", points: 15 },
        { item: "茶壶", points: 12 },
        { item: "壁灯", points: 12 },
        { item: "果味蘑菇", points: 10 },
        { item: "油画笔", points: 10 },
        { item: "画作:远山", points: 10 },
        { item: "画作:巨石", points: 10 },
        { item: "瓷瓶", points: 10 },
        { item: "玫瑰花", points: 10 },
      ],
      like: [
        { item: "急救包", points: 6 },
        { item: "七彩柠檬汁", points: 6 },
        { item: "小号垃圾桶", points: 6 },
        { item: "蜡烛壁灯", points: 6 },
        { item: "薯果", points: 2 },
        { item: "孔雀菊（一束）", points: 2 },
        { item: "数据光盘", points: 4 },
        { item: "红宝石", points: 8 },
        { item: "蓝宝石", points: 8 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "麦当劳",
    date: "1月4日",
    preferences: {
      favorite: [
        { item: "黄金将奖杯", points: 18 },
        { item: "奔马雕塑", points: 15 },
        { item: "落地灯", points: 15 },
        { item: "小马台灯", points: 15 },
        { item: "石狮子", points: 15 },
        { item: "黄鸭头盔", points: 12 },
        { item: "黑胶唱机", points: 12 },
        { item: "椰汁鸡丝焗饭", points: 10 },
        { item: "水桶", points: 10 },
      ],
      like: [
        { item: "横杆", points: 6 },
        { item: "麻布地毯", points: 6 },
        { item: "诱捕箱", points: 6 },
        { item: "红宝石", points: 8 },
        { item: "蓝宝石", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "卷芯萝卜", points: 3 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
        { item: "肥料", points: 2 },
        { item: "木篮子", points: 2 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "三姐",
    date: "3月23日",
    preferences: {
      favorite: [
        { item: "红鹰", points: 25 },
        { item: "机器人模型", points: 20 },
        { item: "莲花灯", points: 15 },
        { item: "赛马纪念毯", points: 15 },
        { item: "三眼毒液", points: 15 },
        { item: "竹子香露", points: 12 },
        { item: "顶罐女人", points: 12 },
        { item: "晴天娃娃", points: 12 },
        { item: "皮垫方凳", points: 12 },
        { item: "火箭模型", points: 12 },
        { item: "便携式腰包", points: 12 },
        { item: "芝士虾焗饭", points: 10 },
        { item: "秘制鲑鱼炒饭", points: 10 },
        { item: "夏娃娃", points: 10 },
        { item: "春娃娃", points: 10 },
      ],
      like: [
        { item: "海鲜饭", points: 8 },
        { item: "红宝石", points: 8 },
        { item: "蓝宝石", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
        { item: "孔雀菊（一束）", points: 2 },
        { item: "毒液弹", points: 2 },
        { item: "芥末", points: 2 },
        { item: "弹药", points: 2 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "马尔斯（全能工匠铺老板）",
    date: "2月18日",
    preferences: {
      favorite: [
        { item: "渔夫镐", points: 20 },
        { item: "铁镐", points: 18 },
        { item: "格子方桌", points: 18 },
        { item: "猫鱼雕塑", points: 15 },
        { item: "工艺工具盒", points: 15 },
        { item: "石狮子", points: 15 },
        { item: "茶香气泡鱼羹", points: 12 },
        { item: "游戏手柄", points: 10 },
        { item: "旧水壶", points: 10 },
        { item: "打字机", points: 10 },
      ],
      like: [
        { item: "刚玉炉芯", points: 7 },
        { item: "盐烤跳鱼", points: 6 },
        { item: "青铜锭", points: 4 },
        { item: "猫儿跳", points: 4 },
        { item: "强壮猫儿跳", points: 4 },
        { item: "红宝石", points: 8 },
        { item: "蓝宝石", points: 8 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "辣椒牛肉汉堡", points: 3 },
        { item: "铜锭", points: 3 },
        { item: "打磨石", points: 2 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "普雷斯利",
    date: "2月23日",
    preferences: {
      favorite: [
        { item: "藤编靠背椅", points: 20 },
        { item: "马首雕塑", points: 18 },
        { item: "假山", points: 15 },
        { item: "奔马雕塑", points: 15 },
        { item: "飞机模型", points: 15 },
        { item: "石狮子", points: 15 },
        { item: "海鲜大杂烩", points: 15 },
        { item: "沉思者", points: 15 },
        { item: "茶具", points: 15 },
        { item: "金蟾", points: 12 },
        { item: "老式电话", points: 12 },
        { item: "玫瑰花", points: 10 },
      ],
      like: [
        { item: "盐烤跳鱼", points: 6 },
        { item: "福字", points: 4 },
        { item: "海苔", points: 4 },
        { item: "红宝石", points: 8 },
        { item: "蓝宝石", points: 8 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "鲁索",
    date: "1月14日",
    preferences: {
      favorite: [
        { item: "持杖玩偶", points: 20 },
        { item: "持斧玩偶", points: 20 },
        { item: "画作:男孩", points: 18 },
        { item: "条纹休闲椅", points: 18 },
        { item: "假山", points: 15 },
        { item: "深色小桌", points: 15 },
        { item: "飞机模型", points: 15 },
        { item: "烤火鸡", points: 10 },
        { item: "椰汁牛排", points: 10 },
        { item: "电焊盔", points: 10 },
        { item: "玫瑰花", points: 10 },
      ],
      like: [
        { item: "电风扇", points: 6 },
        { item: "烟熏火腿", points: 6 },
        { item: "奇怪的镜子", points: 6 },
        { item: "香煎大排", points: 3 },
        { item: "奇怪镜片", points: 2 },
        { item: "红宝石", points: 8 },
        { item: "蓝宝石", points: 8 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "杰克",
    date: "4月24日",
    preferences: {
      favorite: [
        { item: "持刀玩偶", points: 20 },
        { item: "持矛玩偶", points: 20 },
        { item: "巴顿的眼镜", points: 18 },
        { item: "纸箱", points: 15 },
        { item: "婚庆鲜花", points: 15 },
        { item: "神灯", points: 12 },
        { item: "神奇玻璃罐", points: 12 },
        { item: "香水苹果", points: 10 },
        { item: "玫瑰花", points: 10 },
      ],
      like: [
        { item: "气球", points: 8 },
        { item: "辣椒牛肉汉堡", points: 4 },
        { item: "七彩柠檬汁", points: 4 },
        { item: "汽水", points: 3 },
        { item: "椰枣", points: 3 },
        { item: "红宝石", points: 8 },
        { item: "蓝宝石", points: 8 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "托比（玛莎的儿子）",
    date: "3月28日",
    preferences: {
      favorite: [
        { item: "机器人雕塑", points: 20 },
        { item: "化石雕刻", points: 20 },
        { item: "持斧玩偶", points: 20 },
        { item: "持矛玩偶", points: 20 },
        { item: "迷你机器人", points: 20 },
        { item: "东漫游记", points: 15 },
        { item: "香水苹果", points: 10 },
        { item: "游戏手柄", points: 10 },
        { item: "蝙蝠面罩", points: 10 },
        { item: "玫瑰花", points: 10 },
        { item: "弹弓", points: 10 },
        { item: "墨镜", points: 10 },
      ],
      like: [
        { item: "苹果汁", points: 6 },
        { item: "苹果干", points: 6 },
        { item: "急救包", points: 6 },
        { item: "幽灵许愿灯", points: 6 },
        { item: "放大镜", points: 4 },
        { item: "辣椒牛肉汉堡", points: 4 },
        { item: "汽水", points: 3 },
        { item: "流氓头饰", points: 3 },
        { item: "红宝石", points: 8 },
        { item: "蓝宝石", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
        { item: "苹果", points: 2 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "盖勒",
    date: "1月20日",
    preferences: {
      favorite: [
        { item: "持杖玩偶", points: 20 },
        { item: "画作:猫咪", points: 18 },
        { item: "奔马雕塑", points: 15 },
        { item: "黄金人参", points: 15 },
        { item: "金鲑王鱼片", points: 15 },
        { item: "多功能茶几", points: 15 },
        { item: "旧水壶", points: 10 },
        { item: "瓷瓶", points: 10 },
        { item: "秘制鲑鱼炒饭", points: 10 },
        { item: "小茶几", points: 10 },
        { item: "玫瑰花", points: 10 }
      ],
      like: [
        { item: "红茶", points: 3 },
        { item: "茶叶", points: 2 },
        { item: "红宝石", points: 8 },
        { item: "蓝宝石", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "比撒",
    date: "4月16日",
    preferences: {
      favorite: [
        { item: "假山", points: 15 },
        { item: "黄金人参", points: 15 },
        { item: "多功能茶几", points: 15 },
        { item: "灯笼", points: 15 },
        { item: "神灯", points: 12 },
        { item: "帆船模型", points: 12 },
        { item: "书签", points: 10 },
        { item: "瓷瓶", points: 10 },
        { item: "小茶几", points: 10 }
      ],
      like: [
        { item: "石桌", points: 6 },
        { item: "书架", points: 5 },
        { item: "红茶", points: 3 },
        { item: "石墩", points: 2 },
        { item: "生菜", points: 2 },
        { item: "茶叶", points: 2 },
        { item: "红宝石", points: 8 },
        { item: "蓝宝石", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "小美",
    date: "3月11日",
    preferences: {
      favorite: [
        { item: "金角发箍", points: 20 },
        { item: "食人花沙发", points: 20 },
        { item: "猫头鹰钟", points: 20 },
        { item: "相机", points: 18 },
        { item: "豹纹发箍", points: 15 },
        { item: "纪念碑", points: 15 },
        { item: "深思者", points: 15 },
        { item: "首饰盒", points: 10 },
        { item: "怪兽玩偶", points: 10 },
        { item: "相册", points: 10 },
        { item: "夏娃娃", points: 10 },
        { item: "打字机", points: 10 },
        { item: "玫瑰花", points: 10 },
      ],
      like: [
        { item: "粉色猫耳头饰", points: 8 },
        { item: "铃铛项圈", points: 6 },
        { item: "水晶", points: 6 },
        { item: "蜂蜜", points: 3 },
        { item: "球拍", points: 3 },
        { item: "石墩", points: 2 },
        { item: "红宝石", points: 8 },
        { item: "蓝宝石", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "梅林",
    date: "4月21日",
    preferences: {
      favorite: [
        { item: "金色壁钟", points: 25 },
        { item: "机器人雕塑", points: 20 },
        { item: "AI芯片组", points: 18 },
        { item: "古物福袋", points: 15 },
        { item: "宽纹毛地毯", points: 15 },
        { item: "智能芯片组", points: 15 },
        { item: "球形奖杯", points: 15 },
        { item: "深思者", points: 15 },
        { item: "能源灯", points: 10 },
        { item: "旧电脑", points: 10 },
        { item: "怪味浓汤", points: 10 },
        { item: "玫瑰花", points: 10 },
      ],
      like: [
        { item: "民用动力源", points: 7 },
        { item: "小椅子", points: 6 },
        { item: "小键盘", points: 6 },
        { item: "钢珠", points: 6 },
        { item: "数据光盘", points: 4 },
        { item: "仙人掌果", points: 3 },
        { item: "奶茶", points: 3 },
        { item: "红宝石", points: 8 },
        { item: "蓝宝石", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "诺拉",
    date: "4月21日",
    preferences: {
      favorite: [
        { item: "八音盒等候", points: 25 },
        { item: "女神雕像", points: 20 },
        { item: "水晶沙漏", points: 18 },
        { item: "太阳脸", points: 15 },
        { item: "木质八音盒", points: 15 },
        { item: "顶罐男人", points: 12 },
        { item: "条纹泳装", points: 12 },
        { item: "达摩不倒翁", points: 12 },
        { item: "扇子模型", points: 12 },
        { item: "海鲜面", points: 12 },
        { item: "绒毛兔", points: 10 },
        { item: "疯狂拌面", points: 10 },
        { item: "玫瑰花", points: 10 },
      ],
      like: [
        { item: "三毛雪人", points: 9 },
        { item: "钢琴凳", points: 8 },
        { item: "怪味浓汤", points: 8 },
        { item: "胸针", points: 6 },
        { item: "兔儿许愿灯", points: 5 },
        { item: "七彩柠檬汁", points: 4 },
        { item: "蔬菜丸子汤", points: 2 },
        { item: "红宝石", points: 8 },
        { item: "蓝宝石", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "佩特拉",
    date: "4月11日",
    preferences: {
      favorite: [
        { item: "迷你机器人", points: 20 },
        { item: "AI芯片组", points: 18 },
        { item: "星星项圈", points: 18 },
        { item: "东漫游记", points: 15 },
        { item: "潜艇模型", points: 12 },
        { item: "旧电脑", points: 10 },
        { item: "高级能源石", points: 10 },
        { item: "奶油鲑鱼汤", points: 10 },
        { item: "怪兽玩偶", points: 10 },
        { item: "能源灯", points: 10 },
        { item: "玫瑰花", points: 10 },
      ],
      like: [
        { item: "刚玉", points: 8 },
        { item: "卡带盒", points: 6 },
        { item: "水晶", points: 6 },
        { item: "皮沙发", points: 6 },
        { item: "画作风车", points: 6 },
        { item: "数据光盘", points: 4 },
        { item: "七彩柠檬汁", points: 4 },
        { item: "红宝石", points: 8 },
        { item: "蓝宝石", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "菲莉斯",
    date: "2月20日",
    preferences: {
      favorite: [
        { item: "持斧玩偶", points: 20 },
        { item: "爱心壁灯", points: 20 },
        { item: "铁架病床", points: 18 },
        { item: "招财猫", points: 15 },
        { item: "东漫游记", points: 15 },
        { item: "磁石手镯", points: 15 },
        { item: "兔子雪人", points: 15 },
        { item: "黄宝石项链", points: 15 },
        { item: "扇子模型", points: 12 },
        { item: "海鲜面", points: 12 },
        { item: "神奇玻璃罐", points: 12 },
        { item: "南瓜虾仁浓汤", points: 10 },
        { item: "护身符", points: 10 },
        { item: "冬娃娃", points: 10 },
        { item: "玫瑰花", points: 10 },
      ],
      like: [
        { item: "简易膏药", points: 6 },
        { item: "绷带", points: 2 },
        { item: "解毒草", points: 2 },
        { item: "药汁", points: 2 },
        { item: "草药泥", points: 2 },
        { item: "草莓", points: 2 },
        { item: "红宝石", points: 8 },
        { item: "蓝宝石", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "索尼娜（圆桌餐厅）",
    date: "2月15日",
    preferences: {
      favorite: [
        { item: "猫耳伞帽", points: 20 },
        { item: "猫鱼雕塑", points: 15 },
        { item: "小挎包", points: 15 },
        { item: "球形奖杯", points: 15 },
        { item: "黄宝石项链", points: 15 },
        { item: "潜艇模型", points: 12 },
        { item: "神灯", points: 12 },
        { item: "秋娃娃", points: 10 },
        { item: "蔬菜沙拉", points: 10 },
        { item: "玫瑰花", points: 10 },
      ],
      like: [
        { item: "贝壳项链", points: 8 },
        { item: "紫绣球盆栽", points: 6 },
        { item: "紫绣球小盆栽", points: 5 },
        { item: "椰子", points: 4 },
        { item: "磁盘", points: 3 },
        { item: "生菜", points: 2 },
        { item: "红宝石", points: 8 },
        { item: "蓝宝石", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "金吉尔",
    date: "4月1日",
    preferences: {
      favorite: [
        { item: "女神雕像", points: 4 },
        { item: "猫头鹰钟", points: 4 },
        { item: "蝴蝶结发卡", points: 3 },
        { item: "招财猫", points: 3 },
        { item: "梅花灯笼", points: 3 },
        { item: "东漫游记", points: 3 },
        { item: "蓝宝石相框", points: 3 },
        { item: "泡泡器", points: 2 },
        { item: "珊瑚项链", points: 2 },
        { item: "黄鸭头盔", points: 2 },
        { item: "七彩柠檬汁", points: 2 },
        { item: "防晒霜", points: 2 },
        { item: "雨伞", points: 2 },
        { item: "神奇玻璃罐", points: 2 },
        { item: "木雕羊驼", points: 2 },
        { item: "玫瑰花", points: 2 },
      ],
      like: [
        { item: "红宝石", points: 1 },
        { item: "蓝宝石", points: 1 },
        { item: "黄宝石", points: 1 },
        { item: "孔雀菊", points: 1 },
        { item: "能源石", points: 1 },
        { item: "贝壳", points: 1 },
        { item: "贝壳项链", points: 1 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "露西",
    date: "3月7日",
    preferences: {
      favorite: [
        { item: "猫头鹰钟", points: 20 },
        { item: "双门雕花木柜", points: 18 },
        { item: "球形奖杯", points: 15 },
        { item: "破旧瓷盆", points: 12 },
        { item: "柳刀刃（柳刃刀）", points: 12 },
        { item: "相册", points: 12 },
        { item: "水晶项链", points: 10 },
        { item: "瓷瓶", points: 10 },
        { item: "夏娃娃", points: 10 },
        { item: "春娃娃", points: 10 },
        { item: "玫瑰花", points: 10 },
      ],
      like: [
        { item: "气球", points: 8 },
        { item: "水晶", points: 6 },
        { item: "星光珊瑚", points: 5 },
        { item: "七彩柠檬汁", points: 4 },
        { item: "苹果汁", points: 3 },
        { item: "珊瑚", points: 2 },
        { item: "红宝石", points: 8 },
        { item: "蓝宝石", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "爱丽丝",
    date: "3月1日",
    preferences: {
      favorite: [
        { item: "假山", points: 15 },
        { item: "种植指南", points: 15 },
        { item: "神奇玻璃罐", points: 12 },
        { item: "水晶项链", points: 10 },
        { item: "冬娃娃", points: 10 },
        { item: "秋娃娃", points: 10 },
        { item: "玫瑰花", points: 10 },
        { item: "蘑菇炖菜", points: 10 },
        { item: "蔬菜沙拉", points: 10 },
      ],
      like: [
        { item: "竹瓜蒸蛋", points: 8 },
        { item: "红宝石", points: 8 },
        { item: "萝卜炒饭", points: 6 },
        { item: "蜂蜜", points: 6 },
        { item: "蓝宝石", points: 5 },
        { item: "烤肉", points: 4 },
        { item: "南瓜", points: 2 },
        { item: "孔雀菊", points: 3 },
        { item: "竹瓜", points: 3 },
        { item: "土壤", points: 3 },
        { item: "花盆", points: 3 },
        { item: "卷芯萝卜", points: 3 },
        { item: "彩虹花", points: 3 },
        { item: "肥料", points: 2 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "阿迪特",
    date: "3月20日",
    preferences: {
      favorite: [
        { item: "渔夫斧", points: 20 },
        { item: "合金剑", points: 20 },
        { item: "持斧玩偶", points: 20 },
        { item: "持刀玩偶", points: 20 },
        { item: "铁斧", points: 18 },
        { item: "鼎", points: 15 },
        { item: "铁剑", points: 15 },
        { item: "金鲑王鱼片", points: 15 },
        { item: "大剧院", points: 15 },
        { item: "圆号", points: 10 },
        { item: "烤火鸡", points: 10 },
        { item: "玫瑰花", points: 10 },
        { item: "多肉盆栽", points: 10 },
        { item: "护身符", points: 10 },
      ],
      like: [
        { item: "红宝石", points: 8 },
        { item: "硬木版", points: 6 },
        { item: "蓝宝石", points: 5 },
        { item: "星光珊瑚", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "七彩柠檬汁", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "仙人掌果", points: 3 },
        { item: "能源石", points: 3 },
        { item: "树脂", points: 3 },
        { item: "硬木", points: 2 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "欧克斯",
    date: "2月8日",
    preferences: {
      favorite: [
        { item: "树椅", points: 18 },
        { item: "种植指南", points: 15 },
        { item: "猫鱼雕塑", points: 15 },
        { item: "工艺工具盒", points: 15 },
        { item: "小熊沙发", points: 15 },
        { item: "纪念碑", points: 15 },
        { item: "掌形地毯", points: 15 },
        { item: "石狮子", points: 15 },
        { item: "雕刻刀", points: 12 },
        { item: "顶罐女人", points: 12 },
        { item: "顶罐男人", points: 12 },
        { item: "烟熏鱼", points: 12 },
        { item: "凉帽", points: 10 },
        { item: "玫瑰花", points: 10 },
      ],
      like: [
        { item: "红宝石", points: 8 },
        { item: "苹果汁", points: 6 },
        { item: "油煎大排", points: 6 },
        { item: "杏子汁", points: 6 },
        { item: "蜜汁叉烧（烤肉）", points: 6 },
        { item: "木质相框", points: 6 },
        { item: "蓝宝石", points: 5 },
        { item: "星光珊瑚", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "蘑菇炖肉", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
        { item: "没味道的杂烩", points: 3 },
        { item: "肉", points: 2 },
        { item: "野果", points: 2 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "雷明顿",
    date: "2月26日",
    preferences: {
      favorite: [
        { item: "功夫沙袋", points: 15 },
        { item: "羊驼纪念毯", points: 15 },
        { item: "飞机模型", points: 15 },
        { item: "潜艇模型", points: 12 },
        { item: "真皮腰带", points: 12 },
        { item: "火箭模型", points: 12 },
        { item: "便携式腰包", points: 12 },
        { item: "疯狂拌面", points: 10 },
        { item: "玫瑰花", points: 10 },
      ],
      like: [
        { item: "红宝石", points: 8 },
        { item: "工作服", points: 8 },
        { item: "工作裤", points: 8 },
        { item: "花藤盆栽", points: 6 },
        { item: "蓝宝石", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "七彩柠檬汁", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
        { item: "辣椒茶", points: 3 },
        { item: "牛肉", points: 2 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "鲍比",
    date: "4月25日",
    preferences: {
      favorite: [
        { item: "羊驼雕塑", points: 25 },
        { item: "假山", points: 15 },
        { item: "石狮子", points: 15 },
        { item: "木马", points: 12 },
        { item: "顶罐女人", points: 12 },
        { item: "帆船模型", points: 12 },
        { item: "壁灯", points: 12 },
        { item: "圆号", points: 10 },
        { item: "玫瑰花", points: 10 },
        { item: "简易小桌", points: 10 },
        { item: "辣椒茶", points: 10 },
      ],
      like: [
        { item: "红宝石", points: 8 },
        { item: "风扇", points: 6 },
        { item: "小椅子", points: 6 },
        { item: "木雕羊驼", points: 6 },
        { item: "储物箱", points: 6 },
        { item: "香皂", points: 5 },
        { item: "蓝宝石", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "紫胶", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
        { item: "辣椒茶", points: 3 },
        { item: "牛肉", points: 2 },
        { item: "眼罩", points: 2 },
        { item: "硬木", points: 2 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "托蒂",
    date: "4月8日",
    preferences: {
      favorite: [
        { item: "水晶鱼缸", points: 30 },
        { item: "茶香气泡鱼羹", points: 15 },
        { item: "鼎", points: 15 },
        { item: "经典鱼竿", points: 15 },
        { item: "强壮气泡鱼", points: 15 },
        { item: "强壮胡须金鱼", points: 15 },
        { item: "香甜鱼子酱", points: 15 },
        { item: "料理大师", points: 12 },
        { item: "老式电话", points: 12 },
        { item: "气泡鱼", points: 10 },
        { item: "游戏手柄", points: 10 },
        { item: "怪兽玩偶", points: 10 },
        { item: "胡须金鱼", points: 10 },
        { item: "玫瑰花", points: 10 },
      ],
      like: [
        { item: "粗布地毯", points: 8 },
        { item: "皮椅子", points: 7 },
        { item: "伞鱼", points: 4 },
        { item: "入门鱼竿", points: 4 },
        { item: "强壮鱼竿", points: 4 },
        { item: "黄宝石", points: 4 },
        { item: "能源石", points: 3 },
        { item: "面团", points: 2 },
        { item: "芥末", points: 2 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "姜戈",
    date: "1月15日",
    preferences: {
      favorite: [
        { item: "持斧玩偶", points: 20 },
        { item: "持矛玩偶", points: 20 },
        { item: "持刀玩偶", points: 20 },
        { item: "持杖玩偶", points: 20 },
        { item: "工艺蜡烛", points: 15 },
        { item: "青铜剑", points: 12 },
        { item: "料理大师", points: 12 },
        { item: "水晶吊灯", points: 12 },
        { item: "游戏手柄", points: 12 },
        { item: "纸花", points: 12 },
        { item: "孔雀菊盆栽", points: 12 },
      ],
      like: [
        { item: "骑士雕像", points: 9 },
        { item: "骑士盾牌", points: 9 },
        { item: "红宝石", points: 8 },
        { item: "海鲜饭", points: 8 },
        { item: "蓝宝石", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
        { item: "辣椒牛肉汉堡", points: 3 },
        { item: "香煎大排", points: 3 },
        { item: "汽水", points: 3 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "大娃",
    date: "3月15日",
    preferences: {
      favorite: [
        { item: "电锯", points: 30 },
        { item: "渔夫斧", points: 20 },
        { item: "种植指南", points: 15 },
        { item: "石狮子", points: 15 },
        { item: "黄宝石项链", points: 15 },
        { item: "顶罐男人", points: 12 },
        { item: "水晶项链", points: 10 },
        { item: "鱼羹", points: 10 },
        { item: "旧水壶", points: 10 },
        { item: "秘制鲑鱼炒饭", points: 10 },
        { item: "玫瑰花", points: 10 },
      ],
      like: [
        { item: "贝壳项链", points: 8 },
        { item: "红宝石", points: 8 },
        { item: "硬木版", points: 6 },
        { item: "铁木板", points: 6 },
        { item: "大木桶", points: 6 },
        { item: "蓝宝石", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
        { item: "红蘑菇", points: 3 },
        { item: "鸡腿菇", points: 3 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "四娃",
    date: "3月16日",
    preferences: {
      favorite: [
        { item: "葡萄架", points: 25 },
        { item: "灌溉塔", points: 25 },
        { item: "汉斯的眼镜", points: 20 },
        { item: "老式电话", points: 12 },
        { item: "火箭模型", points: 12 },
        { item: "黑胶唱机", points: 12 },
        { item: "三阶魔方", points: 10 },
        { item: "能源灯", points: 10 },
        { item: "蜜汁叉烧（烤肉）", points: 10 },
        { item: "玫瑰花", points: 10 },
      ],
      like: [
        { item: "工作服", points: 8 },
        { item: "红宝石", points: 8 },
        { item: "蓝宝石", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
        { item: "仙人掌果", points: 3 },
        { item: "蘑菇炖肉", points: 3 },
        { item: "椰枣", points: 3 },
        { item: "芥末", points: 2 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "五娃",
    date: "3月16日",
    preferences: {
      favorite: [
        { item: "水晶鱼缸", points: 30 },
        { item: "持矛玩偶", points: 25 },
        { item: "水晶雕塑", points: 15 },
        { item: "奔马雕塑", points: 15 },
        { item: "小黄鸭冲浪板", points: 15 },
        { item: "帆船模型", points: 12 },
        { item: "香煎大排", points: 10 },
        { item: "旧水壶", points: 10 },
        { item: "橡胶轮胎", points: 10 },
        { item: "玫瑰花", points: 10 },
      ],
      like: [
        { item: "蔬菜沙拉", points: 8 },
        { item: "红宝石", points: 8 },
        { item: "蓝宝石", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
        { item: "树脂", points: 3 },
        { item: "杏子", points: 2 },
        { item: "橡胶果", points: 2 },
        { item: "野蚕茧", points: 2 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "七娃",
    date: "3月16日",
    preferences: {
      favorite: [
        { item: "强壮胡须金鱼", points: 20 },
        { item: "豪华钓鱼包", points: 18 },
        { item: "强壮灯笼鱼", points: 15 },
        { item: "猫鱼雕塑", points: 15 },
        { item: "经典鱼竿", points: 15 },
        { item: "潜水头盔", points: 12 },
        { item: "黄鸭头盔", points: 12 },
        { item: "潜艇模型", points: 12 },
        { item: "海鲜大杂烩", points: 12 },
        { item: "香甜鱼子酱", points: 12 },
        { item: "灯笼鱼", points: 10 },
        { item: "瓷瓶", points: 10 },
        { item: "胡须金鱼", points: 10 },
        { item: "玫瑰花", points: 10 },
      ],
      like: [
        { item: "玻璃镜片", points: 6 },
        { item: "盐烤跳鱼", points: 6 },
        { item: "红宝石", points: 8 },
        { item: "蓝宝石", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
        { item: "强壮猫儿跳", points: 4 },
        { item: "强壮金鲑", points: 4 },
        { item: "金鲑", points: 4 },
        { item: "猫儿跳", points: 4 },
        { item: "入门鱼竿", points: 4 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "二娃",
    date: "3月15日",
    preferences: {
      favorite: [
        { item: "机器人雕塑", points: 20 },
        { item: "深色小桌", points: 15 },
        { item: "精致的钢笔", points: 15 },
        { item: "纪念碑", points: 15 },
        { item: "大剧院", points: 15 },
        { item: "秘制鱼王汤", points: 15 },
        { item: "办公桌", points: 15 },
        { item: "顶罐女人", points: 12 },
        { item: "打字机", points: 10 },
        { item: "玫瑰花", points: 10 },
      ],
      like: [

        { item: "红宝石", points: 8 },
        { item: "蓝宝石", points: 5 },
        { item: "衣物篓", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
        { item: "椰子", points: 6 },
        { item: "放大镜", points: 4 },
        { item: "奇怪的镜子", points: 4 },
        { item: "奶茶", points: 3 },
        { item: "红茶", points: 3 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "六娃",
    date: "3月16日",
    preferences: {
      favorite: [
        { item: "女神雕像", points: 20 },
        { item: "持斧玩偶", points: 20 },
        { item: "战鼓", points: 18 },
        { item: "羊驼帽", points: 12 },
        { item: "驼帽挂件", points: 12 },
        { item: "游戏手柄", points: 12 },
        { item: "蝙蝠面罩", points: 12 },
        { item: "火箭模型", points: 12 },
        { item: "墨镜", points: 12 },
        { item: "皮奇护身符", points: 10 },
        { item: "电焊盔", points: 10 },
        { item: "玫瑰花", points: 10 },
      ],
      like: [

        { item: "红宝石", points: 8 },
        { item: "工作裤", points: 8 },
        { item: "蓝宝石", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
        { item: "完整的兽骨", points: 4 },
        { item: "黄金石", points: 3 },
        { item: "兽骨", points: 2 },
        { item: "杏子", points: 2 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "三娃",
    date: "3月15日",
    preferences: {
      favorite: [
        { item: "持杖玩偶", points: 20 },
        { item: "持刀玩偶", points: 20 },
        { item: "青色靠垫沙发", points: 18 },
        { item: "折线纹地毯", points: 15 },
        { item: "飞机模型", points: 15 },
        { item: "太阳脸", points: 15 },
        { item: "扇子模型", points: 12 },
        { item: "水果沙拉", points: 12 },
        { item: "玫瑰花", points: 10 },
        { item: "蔬菜沙拉", points: 10 },
      ],
      like: [
        { item: "红宝石", points: 8 },
        { item: "竹瓜蒸蛋", points: 8 },
        { item: "蓝宝石", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
        { item: "马桶塞", points: 3 },
        { item: "南瓜焖饭", points: 2 },
      ],
      neutral: [
      ]
    }
  },
  {
    "character": "艾克",
    date: "1月1日",
    preferences: {
      favorite: [
        { item: "军用动力源", points: 18 },
        { item: "精密零件", points: 18 },
        { item: "工业动力源", points: 15 },
        { item: "智能芯片组", points: 15 },
        { item: "高级动力源", points: 15 },
        { item: "煎药锅", points: 15 },
        { item: "线圈", points: 10 },
        { item: "玫瑰花", points: 10 },
        { item: "铁锅", points: 10 },
      ],
      like: [
        { item: "红宝石", points: 8 },
        { item: "简单电路", points: 7 },
        { item: "蓝宝石", points: 5 },
        { item: "铝线", points: 5 },
      ],
      neutral: [
      ]
    }},
    {
    "character": "以撒",
    date: "4月16日",
    preferences: {
      favorite: [
        { item: "多功能茶几", points: 15 },
        { item: "黄金人参", points: 15 },
        { item: "灯笼", points: 15 },
        { item: "玫瑰花", points: 10 },
        { item: "小茶几", points: 10 },
        { item: "瓷瓶", points: 10 },
      ],
      like: [
        { item: "石桌", points: 6 },
        { item: "书架", points: 5 },
        { item: "孔雀菊", points: 3 },
        { item: "红茶", points: 3 },
      ],
      neutral: [
      ]
    }},
    {
    "character": "玛莎（玛莎糕点店）",
    date: "1月23日",
    preferences: {
      favorite: [
        { item: "芝士虾焗饭", points: 12 },
        { item: "料理大师", points: 12 },
        { item: "顶罐男人", points: 12 },
        { item: "能源灯", points: 10 },
        { item: "海鲜饭", points: 10 },
        { item: "玫瑰花", points: 10 },
        { item: "羽毛掸", points: 10 },
      ],
      like: [
        { item: "烤面包", points: 6 },
        { item: "蜂蜜", points: 6 },
        { item: "岩盐", points: 6 },
        { item: "丝绸布", points: 5 },
        { item: "洗衣机", points: 4 },
        { item: "孔雀菊", points: 3 },
      ],
      neutral: [
      ]
    }},
    {
    "character": "鲍利（好兄弟家具老板）",
    date: "4月25日",
    preferences: {
      favorite: [
        { item: "顶罐女人", points: 12 },
        { item: "壁灯", points: 12 },
        { item: "简易小桌", points: 10 },
        { item: "辣椒茶", points: 10 },
        { item: "玫瑰花", points: 10 },
      ],
      like: [
        { item: "风扇", points: 8 },
        { item: "羊驼木雕", points: 6 },
        { item: "储物箱", points: 6 },
        { item: "小椅子", points: 6 },
        { item: "香皂", points: 5 },
        { item: "紫胶", points: 4 },
        { item: "孔雀菊", points: 3 },
      ],
      neutral: [
      ]
    }},
    {
    "character": "卡萝（裁缝店老板，马尔斯的妻子，三女儿的母亲）",
    date: "2月7日",
    preferences: {
      favorite: [
        { item: "料理大师", points: 12 },
        { item: "老式电话", points: 12 },
        { item: "首饰盒", points: 12 },
        { item: "碳纤维", points: 10 },
        { item: "燃料", points: 10 },
        { item: "玫瑰花", points: 10 },
      ],
      like: [
        { item: "真皮", points: 6 },
        { item: "丝绸布", points: 6 },
        { item: "洗衣机", points: 4 },
        { item: "粗皮革", points: 4 },
        { item: "孔雀菊", points: 3 },
      ],
      neutral: [
      ]
    }},
    {
    "character": "波莉",
    date: "1月25日",
    preferences: {
      favorite: [
        { item: "太阳脸", points: 15 },
        { item: "口琴", points: 15 },
        { item: "保暖服", points: 12 },
        { item: "丝织围巾", points: 10 },
        { item: "杏脯", points: 10 },
        { item: "玫瑰花", points: 10 },
      ],
      like: [
        { item: "尖鼻子雪人", points: 9 },
        { item: "福字", points: 4 },
        { item: "孔雀菊", points: 3 },
      ],
      neutral: [
      ]
    }
    },
    {
    "character": "多莉",
    date: "1月25日",
    preferences: {
      favorite: [
        { item: "花环", points: 15 },
        { item: "熊娃娃摆件", points: 10 },
        { item: "水果沙拉", points: 10 },
        { item: "杏脯", points: 10 },
        { item: "玫瑰花", points: 10 },
      ],
      like: [
        { item: "气球", points: 8 },
        { item: "画作:街道", points: 6 },
        { item: "汽水", points: 3 },
      ],
      neutral: [
      ]
     }
    },
    {
    "character": "茉莉",
    date: "1月25日",
    preferences: {
      favorite: [
        { item: "金发娃娃", points: 15 },
        { item: "太阳脸", points: 15 },
        { item: "毛围脖", points: 12 },
        { item: "水果蛋挞", points: 10 },
        { item: "丝织围巾", points: 10 },
        { item: "玫瑰花", points: 10 },
      ],
      like: [
        { item: "蓝色围巾", points: 4 },
        { item: "孔雀菊", points: 3 },
      ],
      neutral: [
      ]
     }
    },
    {
    "character": "睡衣熊阿布",
    date: "1月25日",
    preferences: {
      favorite: [
        { item: "香水苹果", points: 12 },
        { item: "蜂王浆", points: 12 },
      ],
      like: [
        { item: "烤肉", points: 4 },
        { item: "蜂蜜", points: 4 },
      ],
      neutral: [
      ]
     }
    },
    {
    "character": "叶叶奶奶（南驿站商店老板，叶叶旅店）",
    date: "2月5日",
    preferences: {
      favorite: [
        { item: "太师椅", points: 18 },
        { item: "珊瑚树", points: 12 },
        { item: "木圆凳", points: 12 },
        { item: "南瓜虾仁浓汤", points: 10 },
        { item: "玫瑰花", points: 10 },
      ],
      like: [
        { item: "星光珊瑚", points: 5 },
        { item: "孔雀菊", points: 3 },
      ],
      neutral: [
      ]
    }
  },
    {
    "character": "达娜（矿场老板）",
    date: "  ",
    preferences: {
      favorite: [
        { item: "黄金萝卜羹", points: 12 },
        { item: "简易屏风", points: 12 },
        { item: "玫瑰花", points: 10 },
      ],
      like: [
        { item: "烤面包", points: 4 },
        { item: "孔雀菊", points: 3 },
      ],
      neutral: [
      ]
    }
  },
    {
    "character": "好吃狗",
    date: "3月27日",
    preferences: {
      favorite: [
        { item: "茶香气泡鱼羹", points: 15 },
        { item: "秘制鲑鱼炒饭", points: 12 },
        { item: "培根刃鱼卷", points: 12 },
        { item: "香水苹果", points: 12 },
      ],
      like: [
        { item: "狗粮", points: 6 },
        { item: "烟熏肉", points: 6 },
      ],
      neutral: [
      ]
    }
  }
  ],
  recipes: [
    {
      name: "鱼羹",
      ingredients: ["盐*1", "蛋*1", "鱼*1"],
      attributes: ["最大体力值+5%", "体力+15"]
    },
    {
      name: "水果蛋挞",
      ingredients: ["蛋*1", "牛奶*1", "野果*1"],
      attributes: ["暴击率+15%", "持续60秒"]
    },
    {
      name: "蔬菜丸子汤",
      ingredients: ["肉*1", "竹瓜*1"],
      attributes: []
    },
    {
      name: "南瓜焖饭",
      ingredients: ["大米*1", "南瓜*1", "牛奶*1"],
      attributes: []
    },
    {
      name: "一盆肉汤",
      ingredients: ["肉*1", "茴香*1"],
      attributes: []
    },
    {
      name: "竹瓜蒸蛋",
      ingredients: ["盐*1", "蛋*1", "竹瓜*1"],
      attributes: []
    },
    {
      name: "经典肉酱面",
      ingredients: ["肉*1", "面粉*1", "蛋*1"],
      attributes: []
    },
    {
      name: "辣椒茶",
      ingredients: ["辣椒*1", "茶*1"],
      attributes: []
    },
    {
      name: "水果沙拉",
      ingredients: ["野果*2", "色拉酱*1"],
      attributes: []
    },
    {
      name: "酱烧鱼头",
      ingredients: ["金鲑*1", "盐*1", "糖*1"],
      attributes: []
    },
    {
      name: "甜甜的杂烩",
      ingredients: ["苹果*1", "杏子*1", "野果*1", "南瓜*1", "金鲑*1"],
      attributes: []
    },
    {
      name: "海鲜大杂烩",
      ingredients: ["金鲑*1", "猫儿跳*1", "伞鱼*1", "锦鲤*1", "气泡鱼*1"],
      attributes: []
    },
    {
      name: "没味道的杂烩",
      ingredients: ["茴香*1", "香菜*1", "糖*1", "蜂蜜*1", "色拉酱*1"],
      attributes: []
    },
    {
      name: "咸咸的杂烩",
      ingredients: ["盐*1", "辣椒*1", "糖*1", "茴香*1", "色拉酱*1"],
      attributes: []
    },
    {
      name: "辣味杂烩",
      ingredients: ["鸡腿菇*1", "面粉*1", "生姜*1", "辣椒*1", "虾肉*1"],
      attributes: []
    },
    {
      name: "炖蘑菇菜",
      ingredients: ["红蘑菇*1", "竹瓜*1", "辣椒*1"],
      attributes: []
    },
    {
      name: "怪味浓汤",
      ingredients: ["辣椒*1", "蜂蜜*1", "茴香*1", "南瓜*1", "杏子*1"],
      attributes: []
    },
    {
      name: "蒸薯果",
      ingredients: ["薯果*2"],
      attributes: []
    },
    {
      name: "蔬菜杂烩",
      ingredients: ["生菜*2", "色拉酱*1"],
      attributes: []
    },
    {
      name: "蘑菇炖肉",
      ingredients: ["盐*1", "肉*1", "鸡腿菇*1"],
      attributes: []
    },
    {
      name: "气泡鱼羹",
      ingredients: ["气泡鱼*1", "竹瓜*1", "盐*1"],
      attributes: []
    },
    {
      name: "海鲜饭",
      ingredients: ["大米*2", "竹瓜*1", "鱼*1"],
      attributes: []
    },
    {
      name: "香煎大排",
      ingredients: ["肉*2", "盐*1", "野果*1"],
      attributes: []
    },
    {
      name: "辣味鱼羹",
      ingredients: ["刃鱼*1", "辣椒*1", "盐*1"],
      attributes: []
    },
    {
      name: "香甜鱼子酱",
      ingredients: ["蛤蟆鱼*2", "糖*1", "茴香*1"],
      attributes: []
    },
    {
      name: "五香牛排",
      ingredients: ["牛肉*1", "茴香*1", "盐*1"],
      attributes: []
    },
    {
      name: "蜜汁叉烧（烤肉）",
      ingredients: ["肉*2", "糖*1", "杏子*1"],
      attributes: []
    },
    {
      name: "烟熏鱼",
      ingredients: ["盐*1", "金鲑*2", "茴香*1"],
      attributes: []
    },
    {
      name: "秘制鲑鱼炒饭",
      ingredients: ["金鲑*1", "大米*1", "茴香*1"],
      attributes: []
    },
    {
      name: "辣酱拌面",
      ingredients: ["肉*1", "面粉*1", "辣椒*1"],
      attributes: []
    },
    {
      name: "茶香气泡鱼羹",
      ingredients: ["茶叶*1", "盐*1", "气泡鱼*2"],
      attributes: []
    },
    {
      name: "芝士虾焗饭",
      ingredients: ["大米*1", "虾肉*2", "糖*1", "牛奶*1"],
      attributes: []
    },
    {
      name: "红菇刃鱼粥",
      ingredients: ["红蘑菇*1", "竹瓜*1", "大米*1", "刃鱼*1"],
      attributes: []
    },
    {
      name: "南瓜虾仁浓汤",
      ingredients: ["竹瓜*1", "南瓜*1", "虾肉*1"],
      attributes: []
    },
    {
      name: "果味蘑菇薄饼",
      ingredients: ["面粉*2", "苹果*1", "红蘑菇*1"],
      attributes: []
    },
    {
      name: "海鲜面",
      ingredients: ["猫儿跳*1", "面粉*1", "茴香*1"],
      attributes: []
    },
    {
      name: "脆香酱烤鲑鱼片",
      ingredients: ["金鲑*1", "岩盐*1", "野果*1"],
      attributes: []
    },
    {
      name: "怪味浓汤",
      ingredients: ["辣椒*1", "蜂蜜*1", "茴香*1", "南瓜*1", "杏子*1"],
      attributes: []
    },
    {
      name: "椰汁鸡丝焗饭",
      ingredients: ["大米*1", "牛奶*1", "鸡肉*1", "椰子*1"],
      attributes: []
    },
    {
      name: "疯狂拌面",
      ingredients: ["辣椒*2", "虾肉*1", "面粉*1", "芥末*1"],
      attributes: []
    },
    {
      name: "黄金萝卜羹",
      ingredients: ["金鲑*2", "生姜*1", "卷芯萝卜*1", "蜂蜜*1"],
      attributes: []
    },
    {
      name: "海苔风味卷饼",
      ingredients: ["野果*1", "海苔*1", "香菜*1", "面粉*1"],
      attributes: []
    },
    {
      name: "培根刃鱼卷",
      ingredients: ["肉*1", "刃鱼*1", "椰枣*1", "岩盐*1"],
      attributes: []
    },
    {
      name: "萝卜炒饭",
      ingredients: ["卷芯萝卜*2", "大米*1", "鸡腿菇*1", "盐*1"],
      attributes: []
    },
    {
      name: "椰汁牛排",
      ingredients: ["椰子*1", "牛肉*2", "松果*1", "辣椒*1"],
      attributes: []
    },
    {
      name: "烟熏火腿",
      ingredients: ["肉*1", "木炭*2", "桂皮*1", "岩盐*1"],
      attributes: []
    },
    {
      name: "秘制鱼王汤",
      ingredients: ["气泡鱼王*1", "蜂王浆*1", "紫胶*1", "干酪*1"],
      attributes: []
    },
    {
      name: "金鲑王鱼片",
      ingredients: ["金鲑王*1", "芥末*1", "海草*1", "杏子*1"],
      attributes: []
    },
    {
      name: "烤火鸡",
      ingredients: ["鸡腿*1", "木炭*1", "蜂蜜*1", "生姜*1"],
      attributes: []
    }
  ]
};

// 逻辑部分
document.addEventListener("DOMContentLoaded", () => {
  const searchCharacterInput = document.getElementById("searchCharacter");
  const characterResultsDiv = document.getElementById("characterResults");
  const searchRecipeInput = document.getElementById("searchRecipe");
  const recipeResultsDiv = document.getElementById("recipeResults");

  // 搜索角色和物品
  searchCharacterInput.addEventListener("input", () => {
    const query = searchCharacterInput.value.trim().toLowerCase();
    characterResultsDiv.innerHTML = ""; // 清空结果

    if (query) {
      data.characters.forEach(character => {
        let matchFound = false;

        // 检查角色名是否匹配
        if (character.character.toLowerCase().includes(query)) {
          matchFound = true;

          const characterDiv = document.createElement("div");
          characterDiv.className = "character";
          characterDiv.textContent = `角色: ${character.character} (${character.date})`;
          characterResultsDiv.appendChild(characterDiv);
        }

        // 显示物品列表（无论角色名是否匹配）
        Object.entries(character.preferences).forEach(([key, items]) => {
          items.forEach(item => {
            if (character.character.toLowerCase().includes(query) || item.item.toLowerCase().includes(query)) {
              if (!matchFound) {
                const characterDiv = document.createElement("div");
                characterDiv.className = "character";
                characterDiv.textContent = `角色: ${character.character} (${character.date})`;
                characterResultsDiv.appendChild(characterDiv);
                matchFound = true;
              }

              const itemDiv = document.createElement("div");
              itemDiv.className = "item";
              itemDiv.textContent = `${key === "favorite" ? "非常喜爱" : "喜欢"}: ${item.item} (+${item.points})`;
              characterResultsDiv.appendChild(itemDiv);
            }
          });
        });
      });
    }
  });

  // 搜索食谱
searchRecipeInput.addEventListener("input", () => {
    const query = searchRecipeInput.value.trim().toLowerCase();
    recipeResultsDiv.innerHTML = ""; // 清空结果

    if (query) {
      data.recipes.forEach(recipe => {
        if (recipe.name.toLowerCase().includes(query)) {
          const recipeDiv = document.createElement("div");
          recipeDiv.className = "recipe";
          recipeDiv.textContent = `食谱: ${recipe.name}`;

          // 显示材料
          const ingredientsDiv = document.createElement("div");
          ingredientsDiv.className = "ingredients";
          ingredientsDiv.textContent = `材料: ${recipe.ingredients.join(", ")}`;
          recipeDiv.appendChild(ingredientsDiv);

          // 显示属性
          const attributesDiv = document.createElement("div");
          attributesDiv.className = "attributes";
          attributesDiv.innerHTML = `属性: ${recipe.attributes
            .map(attr => {
              return attr.replace(/([-+]?\d+%?)/g, match => {
                if (match.startsWith("-")) {
                  return `<span style="color:red;">${match}</span>`;
                } else {
                  return `<span style="color:green;">${match}</span>`;
                }
              });
            })
            .join(", ")}`;
          recipeDiv.appendChild(attributesDiv);

          recipeResultsDiv.appendChild(recipeDiv);
        }
      });
    }
  });
});
