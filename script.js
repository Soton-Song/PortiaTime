// 模拟的 JSON 数据
const data = [
  {
    character: "许医生",
    date: "冬4日",
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
    character: "盖斯特",
    date: "夏11日",
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
    character: "明特",
    date: "春1日",
    preferences: {
      favorite: [
        { item: "按摩椅", points: 30 },
        { item: "画作:织女星", points: 30 },
        { item: "小型铁艺花架", points: 25 },
        { item: "机器人雕塑", points: 20 },
        { item: "实木沙发", points: 20 },
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
    character: "艾伯特",
    date: "夏10日",
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
    character: "阿尔洛",
    date: "秋5日",
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
    character: "艾米莉",
    date: "春17日",
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
    character: "安托因",
    date: "春10日",
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
    character: "李牧师",
    date: "秋9日",
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
    character: "麦当劳",
    date: "春4日",
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
        { item: "卷心萝卜", points: 3 },
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
    character: "三姐",
    date: "秋23日",
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
    character: "马尔斯",
    date: "夏18日",
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
    character: "普雷斯利",
    date: "夏23日",
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
    character: "鲁索",
    date: "春14日",
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
    character: "杰克",
    date: "冬24日",
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
    character: "托比",
    date: "秋28日",
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
    character: "盖勒",
    date: "春20日",
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
    character: "比撒",
    date: "冬16日",
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
    character: "小美",
    date: "秋11日",
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
    character: "梅林",
    date: "冬21日",
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
    character: "诺拉",
    date: "冬21日",
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
    character: "佩特拉",
    date: "冬11日",
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
    character: "菲莉斯",
    date: "夏20日",
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
    character: "索尼娜",
    date: "夏15日",
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
    character: "金吉尔",
    date: "冬1日",
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
    character: "露西",
    date: "秋7日",
    preferences: {
      favorite: [
        { item: "猫头鹰钟", points: 20 },
        { item: "双门雕花木柜", points: 18 },
        { item: "球形奖杯", points: 15 },
        { item: "破旧瓷盆", points: 12 },
        { item: "柳刀刃", points: 12 },
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
    character: "爱丽丝",
    date: "秋1日",
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
        { item: "卷心萝卜", points: 3 },
        { item: "彩虹花", points: 3 },
        { item: "肥料", points: 2 },
      ],
      neutral: [
      ]
    }
  },
  {
    character: "阿迪特",
    date: "秋20日",
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
    character: "欧克斯",
    date: "夏8日",
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
    character: "雷明顿",
    date: "夏26日",
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
    character: "鲍比",
    date: "冬25日",
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
    character: "托蒂",
    date: "冬8日",
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
    character: "姜戈",
    date: "春15日",
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
];

// 搜索功能
const searchInput = document.getElementById("search");
const resultsDiv = document.getElementById("results");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim();
  resultsDiv.innerHTML = ""; // 清空结果

  if (query) {
    data.forEach(character => {
      const matchedItems = [];

      // 搜索角色名
      if (character.character.includes(query)) {
        matchedItems.push(...Object.entries(character.preferences).flatMap(([key, items]) =>
          items.map(item => ({ ...item, type: key }))
        ));
      }

      // 搜索物品名
      Object.entries(character.preferences).forEach(([key, items]) => {
        items.forEach(item => {
          if (item.item.includes(query)) {
            matchedItems.push({ ...item, type: key });
          }
        });
      });

      // 显示匹配结果
      if (matchedItems.length > 0) {
        const characterDiv = document.createElement("div");
        characterDiv.className = "character";
        characterDiv.textContent = `角色: ${character.character} (${character.date})`;
        resultsDiv.appendChild(characterDiv);

        matchedItems.forEach(match => {
          const itemDiv = document.createElement("div");
          itemDiv.className = "item";
          itemDiv.textContent = `${match.type === "favorite" ? "非常喜欢" : match.type === "like" ? "喜欢" : "中立"}: ${match.item} (+${match.points})`;
          resultsDiv.appendChild(itemDiv);
        });
      }
    });
  }
});
