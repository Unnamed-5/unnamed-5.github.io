var storyContent = ﻿{"inkVersion":19,"root":[["^这上元节清早，许多侍女鱼贯而入，准备为你着装。你却挥了挥手，叫他们全都下去，这时，张茂泽踱着小步跑出来，“圣人！圣人！”你瞧见张茂泽那副哈巴狗嘴脸就想笑，但还是厉声说道“什么事？”张茂泽傻笑两声，弯腰抬着头看你，说“圣人…今日不在宫里过节？”你转身背对张茂泽忘殿门外看去，说“朕今日要与我的子民们一同过节，如今在这宫中坐的久了，我竟从未亲眼看过朕的江山子民。就趁今日这上元节！瞧瞧去！”","\n","^你穿着便服就要往外走，张茂泽又紧忙跟了出来“圣人！圣人！这多危险呐，不然，叫几个禁军跟着您？圣人！若是，若是圣人一个三长两短的，若是圣人嫌民间吃不到好的，若是…！”你有些不耐烦，转头喝到 “闭嘴！今日朕就是要与天下子民同乐，再说就割了你的舌！”","\n","^张茂则见拦不住你，便不再说话，恭敬的送你出了宫门，还不忘悄悄的唠叨两句。不过啊，有时你会想，若不是这小太监总是对你那么担心，天天圣人圣人的叫，你怕是会忘了自己是大宋皇帝宋仁宗。不过，今日就不想了！你长舒一口气，走向了","\n",["ev",{"^->":"0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-0","flg":18},{"s":["^热闹的马路",{"->":"$r","var":true},null]}],["ev",{"^->":"0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-1","flg":18},{"s":["^祥和的大街",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"0.6.s"},[{"#n":"$r2"}],"\n","<>","^。","\n",{"->":"assassin"},{"->":"0.g-0"},{"#f":5}],"c-1":["ev",{"^->":"0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":"0.7.s"},[{"#n":"$r2"}],"\n","<>","^。","\n",{"->":"humanity"},{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"assassin":[["^你本应乔装为平民之身，当然不要求随从保护你。“收到。”众军士说到，你暗想：“虽然身为军人，身披锁子甲，仍然锁不住八卦的人心。”","\n","^辰时，约三柱香后，你终于能安稳走出宣德门，看点，正是时候去吃点心！","\n","ev","str","^吃早餐，速干饭！","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"->":"breakfast"},{"#f":5}]}],{"#f":1}],"breakfast":[["^你在街上放松地散着步，享受着暂时无拘无束的时刻。推着小车卖纸花灯的小贩，店铺门口通红通红的灯笼，大小老少的欢声笑语，今天可是上元节，肯定鼓吹喧闹。太常寺前人声鼎沸，你不经陷入自己对向往自由的思考。","\n","^思绪万千之时，你无意间来到了一家小铺的门前。这家小铺的灯笼红彤彤的，当铺中最显眼的大铁锅发出铛铛声，芝麻爆炒的香气向上飘，勾起一条银白的小线，炒元宵的香味吸引着你，你决定：","\n",["ev",{"^->":"breakfast.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^进门，想去吃炒元宵！",{"->":"$r","var":true},null]}],["ev",{"^->":"breakfast.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^离开，去太平兴国寺凑热闹！",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"breakfast.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"breakfast2"},{"#f":5}],"c-1":["ev",{"^->":"breakfast.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":"taiping"},{"#f":5}]}],{"#f":1}],"breakfast2":[["^你接住炒元宵，用勺子舀出一只，吹凉，吸入口中，刚就煎褐的一面咀嚼时。你便瞥到师傅正和穿着似史李（法官）的一人吮痈舐痔、交头接耳：“这铺子元宵买得好啊！我看客人吃着香……”“还不是，额，多亏了您……”","\n","^你无暇顾及此事，望见人流涌动，向前方流去，这朝向貌似是去太平兴国寺祈福。你决定：","\n",["ev",{"^->":"breakfast2.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^去太平天国寺凑热闹！",{"->":"$r","var":true},null]}],["ev",{"^->":"breakfast2.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^再吃一口炒元宵 ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"breakfast2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"taiping"},{"#f":5}],"c-1":["ev",{"^->":"breakfast2.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],{"->":"breakfast3"},"\n",{"#f":5}]}],{"#f":1}],"breakfast3":[["^，用勺子舀出一只，吹凉，吸入口中，刚就煎褐的一面咀嚼时，里面的馅料糊嘴，你觉得有些黏牙，学着周围食客的手势，用牙签捣鼓捣鼓，甜味停在舌尖，你感觉意犹未尽。","\n",["ev",{"^->":"breakfast3.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"^->":"breakfast3"},"turns",5,"!=","/ev",{"*":".^.^.c-0","flg":19},{"s":["^（边走边吃）去太平兴国寺凑热闹！",{"->":"$r","var":true},null]}],"ev","str","^（你已经吃撑了）去太平兴国寺凑热闹！","/str",{"^->":"breakfast3"},"turns",5,"==","/ev",{"*":".^.c-1","flg":21},["ev",{"^->":"breakfast3.0.13.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^。","/str",{"^->":"breakfast3"},"turns",5,"!=","/ev",{"*":".^.^.c-2","flg":7},{"s":["^再吃一口炒元宵",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"breakfast3.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"taiping"},{"#f":5}],"c-1":["^这时你已经吃撑了，决定去太平兴国寺凑热闹！","\n",{"->":"taiping"},{"#f":5}],"c-2":["ev",{"^->":"breakfast3.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.13.s"},[{"#n":"$r2"}],{"->":".^.^.^"},"\n",{"#f":5}]}],{"#f":3}],"taiping":[["^太阳照着你的侧脸，时间来到巳时。沸沸扬扬的人群涌现到太平兴国寺门前，围墙之中，祈福的人群由主持领导，祭奠。布袋和尚的笑容洋溢在脸上，你被这一道白光照到眼睛，不得已低下头，才注意到祈福人群之多。以布袋和尚为中心，左侧有一小门，联通外面，右侧是通往桥的道路。","\n","^你注意到布袋和尚额头折射的白光逐渐黯淡，刹那间，一朵乌云罩住了太阳。闷热的人群不得不散开，你也跟着他们向后退去，人群再次涌动，与以往不同，这次是你第一次参与进去。但是从长街短巷涌出的祈福人群向前推搡着你们。你决定通过看佛像来确定自己的位置:","\n","ev","str","^我在佛像的左边","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^我在佛像的右边","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"buddhaLeft"},"\n",{"#f":5}],"c-1":["^ ",{"->":"buddhaRight"},"\n",{"#f":5}]}],{"#f":1}],"buddhaLeft":[["^你在佛像左侧，你低头，看到了青灰的石板，沾了少许的青苔……","\n","^郁郁的风声萦绕在你耳旁，你不经陷入自己对向往自由的思考。不知不觉中，你退到寺左边的林荫路，你注意到街巷阡陌来了一帮人，虽然这帮人参杂着卖丝绸的小贩，但是小贩身后的人的气势不是普通老百姓，那帮人堵住了里巷。嘴里念念叨叨。一个小僧侣从侧门绕出来，他们迫不得已停下脚步。你察觉对方来意不善，便顺道溜走了。","\n","ev","str","^绕到人群中","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"renqun"},{"#f":5}]}],{"#f":1}],"buddhaRight":[["^你在佛像右侧，你低头，看到了青灰的石板，沾了少许的青苔……","\n","^郁郁的风声萦绕在你耳旁，你不经陷入自己对向往自由的思考。不知不觉中，你退到寺右边的街道， 你注意到街巷阡陌来了一帮人，气势不是普通老百姓，那帮人堵住了里巷。嘴里念念叨叨，像是喝醉一般。有一人明显地用带着凶气的眼神盯你。不过见你参杂在人群中，他们不敢轻举妄动。","\n","ev","str","^绕到人群中","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"renqun"},{"#f":5}]}],{"#f":1}],"renqun":[["^人群像是一朵浪花一样遮住河滩的鹅卵石一样掩盖你的行踪，你想趁机溜走，但是他们中的一人仍然紧盯着你。焦灼的眼神直勾勾的看着你的脑袋，你因此而感觉头皮刺挠，不舒适。你挠头的时候，余光瞥视到有一人在高楼阳台低头看着你们。挠头之后再去看，发现此人突然消失了。转而出现在屋檐上。你感觉:","\n",["ev",{"^->":"renqun.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^这人有点大病，不用理。 ",{"->":"$r","var":true},null]}],["ev",{"^->":"renqun.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^这人有点问题，要注意。 ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"renqun.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"->":"youbing"},"\n",{"#f":5}],"c-1":["ev",{"^->":"renqun.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"->":"zhuyi"},"\n",{"#f":5}]}],{"#f":1}],"youbing":[["^你不以为然，你觉得他们像刚才醉酒的一帮人一样迷迷糊糊，上元节如此欢庆，人如此之多，肯定不关你事。更何况官吏在街上巡视，自己的安全保障稳稳的……","\n","^你不经陷入自己对自由意义的思考。","\n","^思绪万千之时，咻的一声，一道青光闪到你的眼前。原来不知不觉中，你被吸引到延庆观旁的巷子。隐匿与黑暗的蒙面歹徒冲向你，青光闪闪的大刀刺激着你的脑筋。","\n","^你憎恨自以为是的自己，你反向逃跑。","\n","ev","str","^向反方向逃跑","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"fan"},"\n",{"#f":5}]}],{"#f":1}],"fan":[["^屋檐上显出隐隐约约的身影，你急速走着，对面也在快走，熙熙攘攘的人群像是沙尘暴里的沙砾,粒粒分明, 却像坐马车时候被树枝扑面打头一样，令你气喘吁吁，可是屋檐上的几人却越跑越有劲。","\n","ev","str","^用障碍物阻挡视线","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"zhangai"},"\n",{"#f":5}]}],{"#f":1}],"zhangai":[["^唯一的希望是有障碍物阻挡他们看向你的视线，令他们的视角看不到你的身影。","\n","^你向前望去，喧闹的桥头铺满了伞。你拼命挤开人群，突入桥头。","\n","^你现在混入撑着纸伞的人群中，他们很难注意到你，有如此多人撑着纸伞，你成功地扰乱他们的行动，你跟随着人潮，走到桥旁。","\n",["ev",{"^->":"zhangai.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^踏上船 ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"zhangai.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],{"->":"chuan"},"\n",{"#f":5}]}],{"#f":1}],"zhuyi":[["^你深感恐惧，本身为堂堂皇帝被一街头劫犯抢了？你瞧见前方有一商贩买着纸伞用来遮阳，你见顾客之多，喧闹的桥头铺满了伞，便去买了一把。现在，他们很难注意到你，有如此多人撑着纸伞，你成功地扰乱他们的行动，你跟随着人潮，走到桥旁。","\n",["ev",{"^->":"zhuyi.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^踏上船 ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"zhuyi.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"->":"chuan"},"\n",{"#f":5}]}],{"#f":1}],"chuan":[["^，现在已是未时。船只数量之多，濒临堵塞河道，但是船只有条不紊地前后左右行驶。踏上老渔民的船头。你感谢他的好意，想要掏钱来支付船费，渔民却告诉你：“没事，今天上元节日，搭船之事不必多纠缠。”","\n","^你深知，钱作为一个万通物品，不可能有人抵得住诱惑，你好奇地问道：“师傅，真的不要吗？”","\n","^渔民咧开嘴笑道：“难不成你认为我缺钱？”","\n","^你决定问：","\n",["ev",{"^->":"chuan.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^“师傅，你确定？”",{"->":"$r","var":true},null]}],["ev",{"^->":"chuan.0.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^“哎，多买些吃的，师傅。”",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"chuan.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n",{"->":"wenduofu"},{"#f":5}],"c-1":["ev",{"^->":"chuan.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],"\n",{"->":"wenduofu"},{"#f":5}]}],{"#f":1}],"wenduofu":[["^一旁的舵夫抢答:\"现在跑水路的（人）谁会没钱？多亏了政府，我们老百姓才能有好日子啊！\"你假装反驳道：“嗨啊，跑水路的人有钱，那师傅呢，卖鱼的商贩这么多，师傅怎么能有钱？”师傅拂拂雪白的胡须，使劲挤着眼珠，避免大跌眼镜的场面，笑道：”愚兄怎说？知孔子嚯？士志于道，政府官员们帮我们理清在这河道上的任何事情。我们除了自己的船就不用操心别的鸡毛蒜皮的小事情。“太阳之下，老渔民戴着蓑帽，眯着眼睛，望着前方。”师傅，你真的不操心吗？“，老渔民抱着船桨，让船向前飘逸，荡漾的水花被前船前进的波澜抵消，老渔民说到：”无论风况如何，浪之上，向前看，‘脚踏实地‘，终身执持，牢牢固守之。这是我操（作）船多年的道理。“","\n","^\"察觉了什么、发掘了什么、醒悟了什么......\"一旁的舵夫答道，”俺（我）稀罕钱，俺稀罕眼前的生活。但在船上，俺不会为钱而不掌舵。“","\n","^“为此钱而不掌舵?\"你反思刚刚那帮人的行为，你心存顾虑，问道：","\n",["ev",{"^->":"wenduofu.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^\"之前有人用钱使唤你不掌舵吗？\"",{"->":"$r","var":true},null]}],["ev",{"^->":"wenduofu.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^\"在船上你会一直坚守岗位吗? \"",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"wenduofu.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"shihuan"},{"#f":5}],"c-1":["ev",{"^->":"wenduofu.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n",{"->":"jianshou"},{"#f":5}]}],{"#f":1}],"shihuan":[["^\"俺怎么会不掌舵？这个是人命关天的事情。俺也没见过自愿放手的伙计，因为俺知道，俺拿着全船人的命根，所以我不能不负责到底。“舵夫炯炯有神，朴实的脸令你感慨：”原来掌舵人中也有清廉自守的人啊。“舵夫接了一句：”仁以为己任，不亦重乎？哥，你也知道吧？“你不经陷入自己对宫廷的思考——","\n",["ev",{"^->":"shihuan.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^“京城的掌舵人，若能有船夫万分之一的清廉，宋朝的舰艇在风雨叠加中也能泰然自若吧。” ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"shihuan.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"->":"zhangduo"},"\n",{"#f":5}]}],{"#f":1}],"jianshou":["^”俺怎么会不掌舵？这个是人命关天的事情。俺也没见过自愿放手的伙计，因为俺知道，俺拿着全船人的命根，所以我不能不负责到底。“舵夫炯炯有神，朴实的脸令你感慨：”原来掌舵人中也有清廉自守的人啊。“舵夫接了一句：”仁以为己任，不亦重乎？哥，你也知道吧？“你不经陷入自己对宫廷的思考—— “京城的掌舵人，若能有船夫万分之一的清廉，宋朝的舰艇在风雨叠加中也能泰然自若吧。” ",{"->":"zhangduo"},"\n",{"#f":1}],"zhangduo":[["^小浪如惊涛一般，船底起伏一阵，你被惊醒了。你决定暂时不思考如此深奥的问题。","\n","^你与他们攀谈，分享着粗茶淡饭，坐在你旁边的五位百姓也参与对话，从民聊民生到朝廷政策，你总结道：除了工作之事，百姓之事仿佛与宫廷日常生活别无二致，他们也听过四书五经，说书人像是私塾的讲师，无论老弱病残，传播着儒家思想。目前看来政策执行非常好。","\n","^穿过桥洞，你看向河岸，见有一壮汉从河岸蹬上周围船只，辗转腾挪，没了身影，你感觉：","\n",["ev",{"^->":"zhangduo.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^这人有点匆忙，不用理。",{"->":"$r","var":true},null]}],["ev",{"^->":"zhangduo.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^这人有点问题，要注意。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"zhangduo.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"buliWenti"},{"#f":5}],"c-1":["ev",{"^->":"zhangduo.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n",{"->":"buliWenti"},{"#f":5}]}],{"#f":1}],"buliWenti":[["^你在交谈后倍感炙热，你走进船舱里避太阳，虽然竹条编制的篷子漏光到板上，但是你做的木板上并不像铁匠刚打完的金砖一样烫。","\n","^咻，那大汉跳到你所在的渔船上，船往下沉了几分，他身着蓝色的上衣透着肌肉，腰部缠布条，一副纤夫模样，脸却年轻。他问你周围的人，带着结巴：”有没有，见到一人，拿元宵，坐船上？“","\n","^舵手问道：”咋的？你饿了吗？“老渔民接舵手话茬，笑着对大汉说：”今天我没捕鱼，你带把刀上来也不好分鱼吃啊。更何况（你）年纪轻轻，何不怀忠信以待举，何不力行以待取？“，大汉慢慢地解释：”我，是来......\"","\n","^你知晓他是来找你的，虽然大汉带刀上船，目的不善，但是老渔民和舵手没有随风倒舵。你趁着他们谈话的时机，走到船尾，想要跳下逃脱时，刚刚与你攀谈的一人带你跳到其他船只，甚至领你上岸，陪同到玄帝庙祈福。","\n","^你感谢后，他淡定地回复道：”言士者，有德行之称。“","\n","^你知道目前的形势对你不友善，有人或者组织正在暗地针对你。你决定找到安全的地方避难——御史台，你决定：","\n","ev","str","^跟着群众走","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^单独走，不要打扰百姓的兴致","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"qunzhong"},"\n",{"#f":5}],"c-1":["^ ",{"->":"dandu"},"\n",{"#f":5}]}],{"#f":1}],"qunzhong":[["^你决定跟着群众走，即使周围语笑喧阗，也不能停止你对那帮人的恐惧，街上官吏的目的是维持公众秩序，而不是提供报案。你深知走到御史台才是正确的方法。目前只有中央监察机构才能保护你。你跟着民众，你迷失在了人群，人山人海之下，你即是沧海一粟。欢庆的氛围潜移默化地影响你。你见一个又一个的白帽子人流入人群，像是支流汇入河流，你因刚刚的经历而警醒白帽子人的轨迹。","\n","^舞狮的队伍浩浩荡荡，你知晓舞狮的队伍可以抵挡他们的步伐，但是他们极有可能正朝你走去。你匆忙潜伏入旺铺之前，白帽子人果然寻找到你刚才的位置，你感到了生存的重压。","\n","^你躲到另一街坊交谈的人对中后面，白帽子慢慢靠近。","\n",["ev",{"^->":"qunzhong.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^哐哐······ ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"qunzhong.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],{"->":"kuang"},"\n",{"#f":5}]}],{"#f":1}],"dandu":[["^你决定单独走，不要打扰百姓的兴致，维持一个朗朗乾坤的景象，不惊扰民心才是正道。你思考着，七拐八弯，吃喝玩乐等原本计划的事情被你诛之脑后，你感到了生存的重压，","\n","^你躲到一朵草垛后面，白帽子慢慢靠近。","\n",["ev",{"^->":"dandu.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^哐哐······ ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"dandu.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"->":"kuang"},"\n",{"#f":5}]}],{"#f":1}],"kuang":[["^“万物皆虚,万事皆允。”一个年迈的声音从耳旁传来.......","\n",["ev",{"^->":"kuang.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^哐哐······ ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"kuang.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"->":"kuang2"},"\n",{"#f":5}]}],{"#f":1}],"kuang2":[["^“万物皆虚,万事皆允。”一个年轻的声音从耳旁传来.......","\n","^滴答滴答，雨滴落到白帽子上，刹那间，天变成奶白色。","\n",["ev",{"^->":"kuang2.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^······ ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"kuang2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"->":"baise"},"\n",{"#f":5}]}],{"#f":1}],"baise":[["^酉时，瓢泼大雨，你伸头看他们的方位，白帽子像是中流砥柱版屹立在伞海中，浮隐浮现。你采取了“混”的策略，他们潜伏其中，最危险的地方正是最安全的地方，你又得花几文钱买纸伞来潜入群众中。","\n","^碰巧遇见了刚在桥头附近遇到的买纸伞的商贩，你抢下了最后一把伞具，商贩表示他也要收摊了。他问你：“哥，好巧。怎么又遇见你了？”你不禁怀疑自己是否着装过于华丽脱俗。你问道：","\n",["ev",{"^->":"baise.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^“这么巧?” ",{"->":"$r","var":true},null]}],["ev",{"^->":"baise.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^“这伞品质好啊！” ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"baise.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"->":"zhemeqiao"},"\n",{"#f":5}],"c-1":["ev",{"^->":"baise.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],{"->":"pingzhihao"},"\n",{"#f":5}]}],{"#f":1}],"zhemeqiao":[["^他笑道：“您是烟蓑雨笠罢。“你不解，问道：“为何？”","\n","^“烟蓑雨笠卷单行，芒鞋破钵随缘化······ 虽说您没有披着蓑笠，穿着草鞋那样化缘，但可以感受到您身为隐者优游自适的生活啊”","\n","^面对这样的回答，你仍是一头雾水。","\n","^日暮归来、雨湿衣衫。话音刚落，雨势仿佛愈加的猛烈。你听着骤雨不停抽打的地面，雨飞水溅，你原本轻薄的葛布衣裳也逐渐被染成了墨色，紧贴着你的后背。为了躲雨，你顺势蹲下，尽量的藏匿在打着伞的熙熙攘攘的人流中，但总有雨露顺着伞具流下。","\n","^“这里总不会被发现吧”，你心想。但一直躲在人群的伞下总归不是个办法，你总要起身离开，繁忙的人流也终会走散。无奈，为了拾走一把伞具，你只好回到那商贩旁，继续问下去：","\n",["ev",{"^->":"zhemeqiao.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^“不，我并非隐者” ",{"->":"$r","var":true},null]}],["ev",{"^->":"zhemeqiao.0.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^“麻烦您借我把伞” ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"zhemeqiao.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],{"->":"bingfei"},"\n",{"#f":5}],"c-1":["ev",{"^->":"zhemeqiao.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.11.s"},[{"#n":"$r2"}],{"->":"jiesan"},"\n",{"#f":5}]}],{"#f":1}],"pingzhihao":[["^他笑道：“您是烟蓑雨笠罢。“你不解，问道：“为何？”","\n","^“烟蓑雨笠卷单行，芒鞋破钵随缘化······ 虽说您没有披着蓑笠，穿着草鞋那样化缘，但可以感受到您身为隐者优游自适的生活啊”","\n","^面对这样的回答，你仍是一头雾水。","\n","^日暮归来、雨湿衣衫。话音刚落，雨势仿佛愈加的猛烈。你听着骤雨不停抽打的地面，雨飞水溅，你原本轻薄的葛布衣裳也逐渐被染成了墨色，紧贴着你的后背。为了躲雨，你顺势蹲下，尽量的藏匿在打着伞的熙熙攘攘的人流中，但总有雨露顺着伞具流下。","\n","^“这里总不会被发现吧”，你心想。但一直躲在人群的伞下总归不是个办法，你总要起身离开，繁忙的人流也终会走散。无奈，为了拾走一把伞具，你只好回到那商贩旁，继续问下去：","\n",["ev",{"^->":"pingzhihao.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^“不，我并非隐者” ",{"->":"$r","var":true},null]}],["ev",{"^->":"pingzhihao.0.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^“麻烦您借我把伞” ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"pingzhihao.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],{"->":"bingfei"},"\n",{"#f":5}],"c-1":["ev",{"^->":"pingzhihao.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.11.s"},[{"#n":"$r2"}],{"->":"jiesan"},"\n",{"#f":5}]}],{"#f":1}],"bingfei":[["^“不，我想您应是看走眼了，我并非您说的隐者”你不解道。","\n","^只见那戴着蓑笠的商贩一笑，说道：“我当然知道，您是宋仁宗罢”。","\n","^突如其来的揭穿使你犹豫了一下，但连忙答应了这个身份，毕竟在保命面前，一切尽是浮云：","\n",["ev",{"^->":"bingfei.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^“是。” ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"bingfei.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],{"->":"shide"},"\n",{"#f":5}]}],{"#f":1}],"jiesan":[["^“请您赶紧借我把伞，我的时间不多了·····”，商贩悠闲自得的神情在你焦急万分的心情上又添了重重几笔不安。","\n","^只见那戴着蓑笠的商贩一笑，说道：“这么一看，您并非隐者了，是宋仁宗罢”。","\n","^突如其来的揭穿使你犹豫了一下，但连忙答应了这个身份，毕竟在保命面前，一切尽是浮云：","\n",["ev",{"^->":"jiesan.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^“是。” ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"jiesan.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],{"->":"shide"},"\n",{"#f":5}]}],{"#f":1}],"shide":[["^你越发觉得心急如焚，然而也是没法的事，犹如坐在针毡上一般。","\n","^无视了你焦急的神情，那商贩紧接着说：“您应多在这里待些时候，那帮人不会继续追来”。","\n","^你倍感诧异，发现站在你面前的商贩并非等闲之辈。","\n","^“您真的不考虑一下吗？”，正在你犹豫之时，一个打着黑伞的人影突然出现，俯身蹲下，蹑足附耳地与那位商贩说话。你看向他，只见他穿着得体，一身精致蟒袍上的刺绣让你的视线不得不朝他靠近。在如此瓢泼的大雨中，他的衣服居出淤泥而不染，丝毫没有被墨色沾湿的痕迹。","\n","^“不，不行”。商贩话言话语，但话语间的抑扬顿挫与坚定的神情让你万分确信他的坚守。","\n","^“你也知道······一直做这么个小商贩是活不下去的，不如从了我们吧”，只见那人疾言倨色，连手中的黑伞都愈发颤抖，你也逐渐开始了解他们所说的。","\n","^商贩笑而不语，随后开口说道：“直言正色，论不阿谄，是我对自己唯一的忠告，如果连这件事都打不成，让我舍生我都默然”。说罢，那拿着黑伞的人便离开了。","\n",["ev",{"^->":"shide.0.14.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^“刚才这件事······？” ",{"->":"$r","var":true},null]}],["ev",{"^->":"shide.0.15.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^“抱歉，我不该窃听你们的私事。” ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"shide.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.14.s"},[{"#n":"$r2"}],{"->":"gangcai"},"\n",{"#f":5}],"c-1":["ev",{"^->":"shide.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.15.s"},[{"#n":"$r2"}],{"->":"baoqian"},"\n",{"#f":5}]}],{"#f":1}],"gangcai":[["^历史上清廉自守的人很多，你在之前也认为自己是其中一个，但这些人大多出生名门望族，家世显赫。但这位商贩异常脱俗，但依然秉持着这样的操守。“君子周而不比，小人比而不周”，即便在如此窘迫的处境下，他依然能坚守自己的理念，这不禁让你反思了自己的德目。","\n","^大雨依然下着，千万条的银丝如同赛着时间的皮鞭，不停抽打着地面，也似乎在提醒你该走了。你抬起头向那位戴着蓑笠的商贩告别，随后默默地离开了。","\n",["ev",{"^->":"gangcai.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^离开 ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"gangcai.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"->":"yushitai"},"\n",{"#f":5}]}],{"#f":1}],"baoqian":[["^历史上清廉自守的人很多，你在之前也认为自己是其中一个，但这些人大多出生名门望族，家世显赫。但这位商贩异常脱俗，但依然秉持着这样的操守。“君子周而不比，小人比而不周”，即便在如此窘迫的处境下，他依然能坚守自己的理念，这不禁让你反思了自己的德目。","\n","^大雨依然下着，千万条的银丝如同赛着时间的皮鞭，不停抽打着地面，也似乎在提醒你该走了。你抬起头向那位戴着蓑笠的商贩告别，随后默默地离开了。","\n",["ev",{"^->":"baoqian.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^离开 ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"baoqian.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"->":"yushitai"},"\n",{"#f":5}]}],{"#f":1}],"yushitai":[["^最终，你走到御史台。大雨磅礴，挡住橙红的晚霞，在庄严的御史台门口，熙熙攘攘的人群散去。","\n","^那商贩也跟着你到了御史台门前，当你”妄图“踏入的时候，门前的军士拦住你，问道：”此乃官员行事之地，你不可以进。“你坦然说道：”我遇到危险，想要在此避难。“军士说道：“你不能进，规矩就是规矩。”你暗想：“虽然身为军人，身披锁子甲，仍然不知有锁不住的人。”你叫来一个官员替你说话，但是他没有帮助你：“对不起。固守规矩，只有特定官衔的人才能进入。如果你想进入看看，何不怀忠信以待举，何不力行以待取？”","\n","^你不想暴露自己的身份，你珍惜现在的自由，你显露的宫廷气质在短短半天内被磨平，在百姓中领悟到的烟火气息像是一层雾，包裹着你。","\n","^苍白的雾气弥漫在御史台门前，你感觉有一堵可悲的墙壁挡住你生存的道路，即使它本为雾气——吹弹可破。","\n","^现在，它却坚不可摧。","\n","^你不再多言，想到最后的保底之计策，说道：","\n",["ev",{"^->":"yushitai.0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^“我还有一处可达。” ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"yushitai.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.12.s"},[{"#n":"$r2"}],{"->":"yichu"},"\n",{"#f":5}]}],{"#f":1}],"yichu":[["^夜色降至。你被御史台赶了出去，迫不得已与夜间欢庆的百姓一起走。你决定去大相国寺与预先准备好的线人对接。","\n","^时间来到亥时，天空逐渐变浓，像是湛蓝的湖水荡漾在天空，你抬头试图寻找云朵，原来是商户的炊烟描出灰白的烟火气，犹如在北京春天绽开的柳絮飘散到湖水中。买伞的商贩回家了，这段经历貌似随之消散。","\n","^但是刺客并没有随之飘散。","\n","^你孤独地行走在人群中，身在群中，却心显形单影只。","\n","^街头叫卖的声音像是走马灯般，划略过你今天感受到的声音：小吃摊的锅气之声、与百姓的谈话之声、低落在街头的雨声。","\n",["ev",{"^->":"yichu.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^几炷香的时间后，你踏入大相国寺。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"yichu.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],{"->":"guosi"},"\n",{"#f":5}]}],{"#f":1}],"guosi":[["^线人迎接你，在准备你的行装妥善后便去宫廷叫马车，你歇息在寺的顶楼，四处都有守卫，安全至极，却像是一个牢笼。","\n","^在大相国寺的顶楼，你陷入沉思，回顾着今天短暂的旅途。","\n","^百姓力所能及地学习着士大夫的精神——德行、操守和担当。","\n","^“就算有蛀虫的出现，也无法玷污百姓的憨厚朴实。”你想道，“从宫廷到学者再到百姓，我提倡的士大夫的精神当前看来相当成功，但是离真正的胜利还有距离，我们仍需努力......”","\n","^亥时，夜渐渐深了。万家灯火依旧通透明亮，雨也逐渐消失在云层之中。","\n",["ev",{"^->":"guosi.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^在大相国寺，正在出神的你，被带往楼下乘坐马车。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"guosi.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],{"->":"mache"},"\n",{"#f":5}]}],{"#f":1}],"mache":["^忽然听见了类似爆竹的声音。 你探头出车篷，微风吹拂你的脸颊，火药味的气息扑鼻而来。","\n","^一声，两声，三声，你看着一道道白烟的轨迹划破夜幕，绚丽的色彩绽放在夜空之中。一朵又一朵雏菊在夜空中开放、舒展、落下、消失。他们忽明忽暗、忽快忽慢、忽高忽低，点点滴滴，汇成数千星星，共同照亮了整个京城。","\n","done",{"#f":1}],"humanity":[["^你在榆林街放松地散着步，享受着逃离众人目光的时间。推着小车卖纸花灯的小贩，店铺门口通红通红的灯笼，大小老少的欢声笑语，使你意识到今天是上元节。你不禁暗暗羡慕周围闹腾的人们，羡慕那些嬉闹的孩子，羡慕那些依偎的情侣，羡慕那些一家老少一起逛街的场景。你极其羡慕他们的自由自在；谁能想到，堂堂万人之上的皇帝，竟然会嫉妒自己的子民呢？你想起晚上宫廷里要举行死气沉沉的上元仪式，暗暗叹了口气。","\n","^思绪万千之时，你无意间来到了一家小铺的门前。这家小铺的灯笼散发着温暖的黄光，在一众大红灯笼的街道里显得特别。炒元宵的香味吸引着你，你决定：","\n",["ev",{"^->":"humanity.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^进门",{"->":"$r","var":true},null]}],["ev",{"^->":"humanity.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^过门不入",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"humanity.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","<>","^。","\n",{"->":"enterDoor"},{"#f":5}],"c-1":["ev",{"^->":"humanity.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","<>","^。","\n",{"->":"passDoor"},{"#f":5}]}],{"#f":1}],"enterDoor":[["^你轻轻拨开草编的帷幕，映入眼帘的是一幅和睦融融的景象：前面的桌子，坐着一位老人，手里捧着一杯清澈而浓郁的酒，一口一口地抿着酒。向左望去，几位青年书生在桌上慷慨激昂地讨论着什么。","\n","^你听到了老板娘热情招客的声音，赶忙去点了一碗香喷喷的油炒芝麻元宵。你捧着热气腾腾的大碗，决定：","\n",["ev",{"^->":"enterDoor.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^向前走，朝老人走去。",{"->":"$r","var":true},null]}],["ev",{"^->":"enterDoor.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^向右走，朝青年人走去。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"enterDoor.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"oldMan"},{"#f":5}],"c-1":["ev",{"^->":"enterDoor.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":"youngMan"},{"#f":5}]}],{"#f":1}],"oldMan":[["^那位老人吸引了你的注意力。你走向他瘦削的背影，在他面前坐下。","\n","^老人抬起头，带着询问的目光看向你。你观察到老人沧桑而和善的相貌：岁月的印记化作皱纹的模样，包围着老人的眼角和略显黝黑的脸颊。灰白的鬓毛和胡须布满了下颚，眉眼间透露出刺骨的正气。","\n","^你忽地记起了他的名字。他是包拯，曾弹劾过你的外戚张尧佐。张尧佐不是什么好货。张尧佐虽无真本事，却为了赢得你所谓的恩宠，已经俨然失掉了自己的尊严。你知道这一切；但是碍于情面和家庭的关系，你无法向他下狠手。你也知道，包拯对此很不满。","\n","^对方的声音打断了你的思绪：“君为何大好团圆之日，弃家中儿女而独身至此？”","\n",["ev",{"^->":"oldMan.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^“家中亲戚孩儿多，过于吵闹，出来静静心。”",{"->":"$r","var":true},null]}],["ev",{"^->":"oldMan.0.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^“家无儿女，父母千里之外，来此尝试缓解落寞之意。”",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"oldMan.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n",{"->":"oldMan2"},{"#f":5}],"c-1":["ev",{"^->":"oldMan.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],"\n",{"->":"oldMan2"},{"#f":5}]}],{"#f":1}],"oldMan2":[["^你本不愿向他撒谎，但是你更不愿透露你的真实身份。毕竟，能以此身份出来巡视世间，机会极少。","\n","^包拯叹了口气。“当你像我一样年纪大的时候，你不会厌烦这样的吵闹了。” 你观察到他的表情稍微抽搐了一下，仿佛有些什么感情要流露出来。包拯也意识到了，恢复到了之前忧郁的神情。","\n","^你看着他抖动着伛偻的背，一口闷下了一杯桃红酒。一口，一口，又一口，你看着他握着杯子的手逐渐开始颤抖，眼里的悲哀也越来越深刻。","\n","^你观察着平日一丝不苟的审判官当下的颓靡，不禁问道：","\n",["ev",{"^->":"oldMan2.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^“是为了什么事伤心？”",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"oldMan2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n","^“家事，国事，天下事！” 包拯又举起陈旧的酒瓶，摇摇欲坠地想将自己的杯子斟满；杯子倒是没满，木桌上倒是洒了不少。你看着脸庞通红的包拯，看着他将自己半满的酒杯向你敬了敬，又一口闷下了。","\n","^你于心不忍，将自己基本未动的元宵推到了包拯的面前。包拯无动于衷，继续举着空的酒杯盯着你看。他的目光炙热，仿佛带着审视的意味；或许是他职业的缘故，令你产生了一丝恐惧。","\n","^“你可知，我无能为力？”","\n","^你皱起眉头，不知如何应对老人的提问。","\n","^“若皇上偏要偏袒那无能无德之人，这世间又何处有公平可言？若其人为众人公认之恶人，所作所为是白昼之魑魅，怎能因区区血缘而放行？而当恶者行恶无惩无罚，善者声声讨伐却被忽视，君王之责何以承担？天子之责，乃为天地立心，为生民立命；若因爱妃之宠、妻妾之奉，所得穷乏、无知者识汝，而抛弃责任之内的公正无私，又何谈尧舜之德？当贪污贿赂等恶行皆可以被金钱权力所覆盖，千万清廉官吏为何而清廉？为护短的皇帝？为腐败的朝廷？纵观史书，各代盛世从兴盛走向灭亡，皆为君王沉湎酒色所始。不知宋朝......”","\n","^一阵剧烈的咳嗽打断了包拯的话语。老人将手中的酒杯放置在桌上，瘦弱的双手轻轻敲打着胸腔，仿佛在驱散一股怒气。","\n","^包拯的言语在你的心中激起了一波又一波的愧疚。曾经何时，那个发誓一心一意为百姓谋幸福的少年，变成了现在这幅模样？包拯的苛责，在你的耳中回荡：理应将士大夫精神 -- 宋人引以为傲的精神！-- 贯彻最彻底的自己，却成为了年少时最鄙夷的人。大宋若因你而亡，因你的作为和不作为而亡，你如何承担起这样的责任？","\n","^老人忽然向前倾，紧紧握住你的双手。你发现老人的眼睛湿润、清澈而明亮，全然失了醉意。","\n","^“殿下，那些我们应该做的事，哪里有不困难的？”","\n","^砰的一声，包拯的头倒在桌上，沉沉睡去，握着你的手却并未松开。","\n","^你悄悄地将老人的手掌挪开，起身，离去，施给门店跑腿打杂的孩童几枚铜钱。","\n",{"->":"oldMan3"},{"#f":5}]}],{"#f":1}],"oldMan3":[["ev","str","^离开","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"->":"leave"},{"#f":5}]}],{"#f":1}],"youngMan":[["^那群慷慨激昂的青年人，唤起了你对少年时光的回忆。你向他们走去，捧着油香油香的炒元宵，乘虚挤入了他们之间。","\n","^“狗屁！”","\n","^你握着盛着汤圆的勺匙，向前探头，好奇是谁出此狂妄的话语。站在椅子上，展开双臂的，是一位英姿飒爽的少年。眉毛紧拧，身型瘦削；拳头紧握，眼神坚定而执着。听着他热火朝天的演说，你依稀记起了他的名字：程颐。你记得，这位少年在朝廷上侃侃而谈关于宋朝所谓的“危机”。他具体讲了什么，时间久了，你也记得不大清楚。当天，因为和爱妃及家人的一些矛盾，你的心情很不好，也没有打气精神面对大臣。你想，或许当时，心思也不在这上面吧。","\n","^“这是什么狗屁的皇帝！”","\n","^“ 我们所期望的仁者，理应让大众的幸福高于自我欲望的放纵，理应听从臣子的劝导和建议，理应将朝政为第一要务，理应为生民立命，理应为万世开太平！现在？我劝皇上心王道，念生灵，皇上充耳不闻。身为文官，向皇上提议乃职责所在；而身为皇上，至少需要对他的臣子有着基本的尊重。若对阿谀奉承之言鼓励，批评之意闭耳，我大宋的未来何去？何从？”","\n","^程颐的言语在你的心中激起了一波又一波的愧疚。曾经何时，那个发誓一心一意为百姓谋幸福的少年，变成了现在这幅模样？程颐的苛责，在你的耳中回荡：理应将士大夫精神 -- 宋人引以为傲的精神！-- 贯彻最彻底的自己，却成为了年少时最鄙夷的人。大宋若因你而亡，因你的作为和不作为而亡，你如何承担起这样的责任？","\n","^有人忽然拉了拉你的衣袖。你抬起头，对上了程颐的目光。","\n","^程颐激烈的演讲截然而止。你看着他看着你，端详着你的相貌，眼神从惊讶，到疑惑，到恐慌，再到绝望，最终显出释然而坚毅的神情。你知道，他认出了你是谁。","\n","^众人的目光逐渐转移到你身上，你决定：","\n",["ev",{"^->":"youngMan.0.18.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^留在原地。",{"->":"$r","var":true},null]}],["ev",{"^->":"youngMan.0.19.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^默默离开。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"youngMan.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.18.s"},[{"#n":"$r2"}],"\n","^在众人的注视下，你缓慢地举起了双手。一声，两声，三声，你开始鼓掌。渐渐地，周围的人和你一样，都热烈地鼓起了掌。程颐被前后左右的掌声所包围，眼神从未离开过你。你看着他的神色变得更加疑惑不解；一瞬间，他仿佛想用蛮力将自己眼里的恐惧所遮挡，努力保持着自信的模样与众人对话。程颐继续着他的讲话，似乎下了某种决心，依然毫无顾忌地批评你的无能。程颐的批判，并未导致你对他的愤怒，反而你从心底生出对程颐对尊重；你心想，若大宋的年轻人都如程颐一般，宋朝的繁荣昌盛必将持续世世代代。你愧疚地想，自己的疏忽和懈怠，让多少书生的思想被囚禁，让多少年轻人的努力被白费啊。在他们的欢声笑语中，你悄悄离开了。","\n",{"->":"leave"},{"#f":5}],"c-1":["ev",{"^->":"youngMan.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.19.s"},[{"#n":"$r2"}],"\n","^你知道错在自己。你也知道，若你留在此处，你只会延续程颐的沉默。你不愿让程颐再沉默了；程颐的批判，并未导致你对他的愤怒，反而你从心底生出对程颐对尊重；你心想，若大宋的年轻人都如程颐一般，宋朝的繁荣昌盛必将持续世世代代。你愧疚地想，自己的疏忽和懈怠，让多少书生的思想被囚禁，让多少年轻人的努力被白费啊。你躲开了程颐的目光，将蒙脸的纱巾提得更高，悄悄地走出了门店，桌上剩着没吃完的半碗汤圆。","\n",{"->":"leave"},{"#f":5}]}],{"#f":1}],"passDoor":["^因为担心进食的时候暴露自己的身份，你决定抵抗住元宵的诱惑，继续向前走。肚子咕噜噜地叫，你对百姓的羡慕更加一层。","\n",{"->":"dxgs"},{"#f":1}],"leave":["^你离开了，带着新的觉悟、愧疚及改过自新的想法离开了，向前走去。","\n",{"->":"dxgs"},{"#f":1}],"dxgs":[["^天上下起了淅淅沥沥的雨。大雨打击着路人的身体，却丝毫没有人让人间的热闹暗淡。","\n","^你在街上随意，漫无目的地走着；路过一个又一个的商铺，你让自己的双脚带着你走向远方。走着走着，你发现周围的声音越来越少，路也越来越坎坷不平。灯火变暗，天上的圆月替代了灯笼。你观察四周，发现你来到了一个荒无人烟的地方。这里，是大相国寺。原本守在此寺祷告的和尚们，今日都上街过节了，留下空无一人的寺庙。","\n","^你缓慢地踏进寺里，欣赏着内部的装饰。扑面而来的，是一种古老而庄严的气息。你想，这里虽然没有人间烟火的热闹，也有一种朦胧的美感；围绕四周的佛像，里面住着守护这里的神灵。你隐约地感受到，老百姓的信仰所带来的力量。","\n","^你向前走，走到了观音像面前。慈眉善目的观音，令你心生敬意。你拂去积在软垫上的尘埃，轻轻跪下，双手合十，向观音示虔诚。","\n","^突然，你的身后传来了杂乱的脚步声和喘息声。","\n","ev","str","^回头","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"dxgs2"},"\n",{"#f":5}]}],{"#f":1}],"dxgs2":[["^你匆忙起身，回头一看：","\n","^月光下，大雨中，一位看不清面貌的少年在向你跑来。你看着他离寺庙的大门越来越近，相貌也越来越清晰。少年的衣物破烂不堪，被磅礴大雨打湿成半透明的状态，更突显了他骨瘦嶙峋的身板，仿佛已经好几天没吃饭了。伤痕遍布了少年的手臂，有些早已痊愈，剩下的依然滴着血。少年的肩上，扛着一根长长的木棍，顶端系着瘪布包。少年的头发被雨水和汗水共同浸湿，脸上流露着焦虑而迷茫的神情。","\n","^一眨眼，少年已经气喘吁吁地跑到了寺庙的门口。你看着少年一脚跨进寺庙，被门槛绊倒而摔在寺庙的地板上。你看着他翻了个身，不顾通红通红的脚踝，长吁一口气，闭眼静息；想必，是离家出走了吧。你掏了掏口袋，发现了随身带的几枚果脯。你蹲在少年的旁边，将果脯塞进了少年的手心。少年睁开了眼，惊讶而感激。你看着他狼吞虎咽地吞下果脯，心生怜惜。你问：","\n",["ev",{"^->":"dxgs2.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^“是为何而来京城？”",{"->":"$r","var":true},null]}],["ev",{"^->":"dxgs2.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^“回家吧，回到最初的美好。”",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"dxgs2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"dxgs2.dxgs3"},{"#f":5}],"c-1":["ev",{"^->":"dxgs2.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n",{"->":"dxgs2.dxgs3"},{"#f":5}]}],{"dxgs3":["^少年咀嚼着果脯，沉默不语。","\n","^你叹了口气，在门槛上坐了下来，望着远方的夜色。过了一会，你发现少年坐在你的旁边。他的身躯靠着大门的门框，望着夜色发神。","\n","^你不知道，也不打算去追问少年的身份。他有可能是城中富官的纨绔子弟，和家人大吵一架摔门而出；他有可能是穷人家的孩子，和街上的混混打架负伤而不敢回家；他有可能是流浪的野孩子，来寺庙暂且躲外边的大雨 ...... 你看向少年，看到的不仅是那里的少年，而是元宵店的青年，孤独的老人，热情的老板娘，闭口不言的老爷。你看到的是街上的情侣，是幸福的家庭，是清心的和尚；是每日弹劾的文官，是驻守边塞的武官，是大宋的老百姓，是属于宋朝的人们。坐在你身边的，是大宋的过去、当下和未来。","\n","^你曾将“士可杀不可辱”奉为真理，因此而有理有据地忽视了众臣的建议。现在的你，重新审视自己后，对过去的想法感到惭愧：忠言逆耳利于行，逆耳之言和辱能画上等号吗？就算能，那作为统领众人的你，若需要侮辱才能进步，承受一定的侮辱也在你的职责内。若人为士，则必先天下之忧而忧，后天下之乐而乐。若凡人以“士”要求自己，却屈服于欲望，后果也仅限于他对自我和周围的伤害；作为天子的你，若先天下之乐而乐，受苦的可不止是身边的人，而是千万的老百姓。","\n","^在那时，你才真正体会到士大夫精神的含义，以及这份精神所带来的责任。","\n","^为天地立心，为生民立命；为往世继绝学，为万事开太平。","\n",{"->":"ending"},{"#f":1}],"#f":1}],"ending":["^夜渐渐深了。万家灯火依旧通透明亮，雨也逐渐消失在云层之中。","\n","^正在出神的你，忽然听见了类似爆竹的声音。一声，两声，三声，你看着一道道白烟的轨迹划破夜幕，绚丽的色彩绽放在夜空之中。一朵又一朵雏菊在夜空中开放、舒展、落下、消失。他们忽明忽暗、忽快忽慢、忽高忽低，却共同照亮了整个京城。","\n","^你和少年共同看着烟火：少年观看天上的表演，而你偷看尘世的人间。","\n","^一切安好。","\n","done",{"#f":1}],"#f":1}],"listDefs":{}};