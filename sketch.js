var form, player, game, database;
var bg_gs0, vid, p1Img, p2Img, p3Img, p4Img, visibility_r_img;
var p1, p2, p3, p4, allPlayers, players, vr;
var playerCount = 0;
var gameState = 0;
var r1_rw, r1_bw, r1_bw2, r1_d, r1_d2, r1_rw2, r2_rw, r2_bw, r2_bw2, r2_d, r3_uw, r3_rw, r3_d, r6_ld, r6_rd, r6_lw, r6_uw, r6_rw;
var stairs_lw, stairs_uw, stairs_bw, stairs_rw1, stairs_rw2, stairs_d, stair1, stair2, stair3, stair4, stair5, stair6;
var house_lw, house_rw, house_bw, house_uw1, house_uw2, house_uw3, house_uw4, house_md, lab_lw, lab_uw, lab_rw, lab_bw;
var r5_lw, r5_uw1, r5_d, r5_uw2, r4_lw, r4_bw, r4_bw2, r4_bw3, r4_d, r4_bw4;
var lab_stairs_lw, lab_stairs_uw, lab_stairs_bw, lab_stairs_rw1, lab_stairs_rw2, lab_stairs_d, lab_stair1, lab_stair2, lab_stair3, lab_stair4, lab_stair5, lab_stair6;
var labf1, labf2; //, lab_f2, lab_f3, lab_f4, lab_f5, lab_f6, lab_f7, lab_f8, lab_f9, lab_f10, lab_f11, lab_f12, lab_f13, lab_f14, lab_f15, lab_f16, lab_f17, lab_f18, lab_f19, lab_f20, lab_f21, lab_f22, lab_f23, lab_f24, lab_f25, lab_f26, lab_f27, lab_f28, lab_f29, lab_f30, lab_f31, lab_f32, lab_f33, lab_f34, lab_f35, lab_f35, lab_f36, lab_f37, lab_f38, lab_f39, lab_f40, lab_f41, lab_f42, lab_f43, lab_f44, lab_f45, lab_f46, lab_f47, lab_f48, lab_f49, lab_f50, lab_f51, lab_f52, lab_f53, lab_f54, lab_f55, lab_f56, lab_f57, lab_f58, lab_f59, lab_f60, lab_f61, lab_f62, lab_f63, lab_f64, lab_f65, lab_f66, lab_f67, lab_f68, lab_f69, lab_f70, lab_f71, lab_f72, lab_f73, lab_f74, lab_f75, lab_f76, lab_f77, lab_f78, lab_f79, lab_f80, lab_f81, lab_f82, lab_f83, lab_f84, lab_f85, lab_f86, lab_f87, lab_f88, lab_f89, lab_f90, lab_f91, lab_f92, lab_f93, lab_f94, lab_f95, lab_f96, lab_f97, lab_f98, lab_f99, lab_f100, lab_f101, lab_f102, lab_f103, lab_f104, lab_f105, lab_f106, lab_f107, lab_f108, lab_f109, lab_f110, lab_f111, lab_f112, lab_f113, lab_f114, lab_f115, lab_f116, lab_f117, lab_f118, lab_f119, lab_f120, lab_f121, lab_f122, lab_f123, lab_f124, lab_f125, lab_f126, lab_f127, lab_f128, lab_f129, lab_f130, lab_f131, lab_f132, lab_f133, lab_f134, lab_f135, lab_f136, lab_f137, lab_f138, lab_f139, lab_f140, lab_f141, lab_f142, lab_f143, lab_f144, lab_f145, lab_f146, lab_f147, lab_f148, lab_f149, lab_f150, lab_f151, lab_f152, lab_f153, lab_f154, lab_f155, lab_f156, lab_f157, lab_f158, lab_f159, lab_f160, lab_f161, lab_f162, lab_f163, lab_f164, lab_f165, lab_f166, lab_f_x, lab_f_y;
var r1f, r1fImg; //, r1_f2, r1_f3, r1_f4, r1_f5, r1_f6, r1_f7, r1_f8, r1_f9, r1_f10, r1_f11, r1_f12, r1_f13, r1_f14, r1_f15, r1_f16, r1_f17, r1_f18, r1_f19, r1_f20, r1_f21, r1_f22, r1_f23, r1_f24, r1_f25, r1_f26, r1_f27, r1_f28, r1_f29, r1_f30, r1_f31, r1_f32, r1_f33, r1_f34, r1_f35, r1_f36, r1_f37, r1_f38, r1_f39, r1_f40, r1_f41, r1_f42, r1_f43, r1_f44, r1_f45, r1_f46, r1_f47, r1_f48, r1_f49, r1_f50, r1_f51, r1_f52, r1_f53, r1_f54, r1_f55, r1_f56, r1_f57, r1_f58, r1_f59, r1_f60, r1_f61, r1_f62, r1_f63, r1_f64, r1_f65, r1_f66, r1_f67, r1_f68, r1_f69, r1_f70, r1_f71, r1_f72, r1_f73, r1_f74, r1_f75, r1_f76, r1_f77, r1_f78, r1_f79, r1_f80, r1_f81, r1_f82, r1_f83, r1_f84, r1_f85, r1_f86, r1_f87, r1_f88, r1_f89, r1_f90, r1_f91, r1_f92, r1_f93, r1_f94, r1_f95, r1_f96, r1_f97, r1_f98, r1_f99, r1_f100, r1_f101, r1_f102, r1_f103, r1_f104, r1_f105, r1_f106, r1_f107, r1_f108, r1_f109, r1_f110, r1_f111, r1_f112, r1_f113, r1_f114, r1_f115, r1_f116, r1_f117, r1_f118, r1_f119, r1_f120, r1_f121, r1_f122, r1_f123, r1_f124, r1_f125, r1_f126, r1_f127, r1_f128, r1_f129, r1_f130, r1_f131, r1_f132, r1_f133, r1_f134, r1_f135, r1_f136, r1_f137, r1_f138, r1_f139, r1_f140, r1_f141, r1_f142, r1_f143, r1_f144, r1_f145, r1_f146, r1_f147, r1_f148, r1_f149, r1_f150, r1_f151, r1_f152, r1_f153, r1_f154, r1_f155, r1_f156, r1_f157, r1_f158, r1_f159, r1_f160, r1_f161, r1_f162, r1_f163, r1_f164, r1_f165, r1_f166, r1_f167, r1_f168, r1_f_x, r1_f_y;
var r2f; //, r2f2, r2f3, r2f4, r2f5, r2f6, r2f7, r2f8, r2f9, r2f10, r2f11, r2f12, r2f13, r2f14, r2f15, r2f16, r2fx, r2fy;
var r3f; //, r3f2, r3f3, r3f4, r3f5, r3f6, r3f7, r3f8, r3f9, r3f10, r3f11, r3f12, r3f13, r3f14, r3f15, r3f16, r3f17, r3f18, r3f19, r3f20, r3f21, r3f22, r3f23, r3f24, r3f25, r3f26, r3f27, r3f28, r3f29, r3f30, r3f31, r3f32, r3f33, r3f34, r3f35, r3f36, r3f37, r3f38, r3f39, r3f40, r3f41, r3f42, r3f43, r3f44, r3f45, r3f46, r3f47, r3f48, r3f49, r3f50, r3f51, r3f52, r3f53, r3f54, r3f55, r3f56, r3f57, r3f58, r3f59, r3f60, r3f61, r3f62, r3f63, r3f64, r3f65, r3f66, r3f67, r3f68, r3f69, r3f70, r3f71, r3f72, r3f73, r3f74, r3f75, r3f76, r3f77, r3f78, r3f79, r3f80, r3fx, r3fy;
var r4f1, r4f2, r4f3, r4f4, r4f5, r4f6, r4f7, r4f8, r4f9, r4f10, r4f11, r4f12, r4f13, r4f14, r4f15, r4f16, r4f17, r4f18, r4f19, r4f20, r4f21, r4f22, r4f23, r4f24, r4f25, r4f26, r4f27, r4f28, r4f29, r4f30, r4f31, r4f32, r4f33, r4f34, r4f35, r4f36, r4f37, r4f38, r4f39, r4f40, r4f41, r4f42, r4f43, r4f44, r4f45, r4f46, r4f47, r4f48, r4f49, r4f50, r4f51, r4f52, r4f53, r4f54, r4f55, r4f56, r4f57, r4f58, r4f59, r4f60, r4f61, r4f62, r4f63, r4f64, r4f65, r4f66, r4f67, r4f68, r4f69, r4f70, r4f71, r4f72, r4f73, r4f74, r4f75, r4f76, r4f77, r4f78, r4f79, r4f80, r4f81, r4f82, r4f83, r4f84, r4f85, r4f86, r4f87, r4f88, r4f89, r4f90, r4f91, r4f92, r4f93, r4f94, r4f95, r4f96, r4f97, r4f98, r4f99, r4f100, r4f101, r4f102, r4f103, r4f104, r4f105, r4f106, r4f107, r4f108, r4f109, r4f110, r4f111, r4f112, r4f113, r4fx, r4fy;
var r5f; //, r5f2, r5f3, r5f4, r5f5, r5f6, r5f7, r5f8, r5f9, r5f10, r5f11, r5f12, r5f13, r5f14, r5f15, r5f16, r5f17, r5f18, r5f19, r5f20, r5f21, r5f22, r5f23, r5f24, r5f25, r5f26, r5f27, r5f28, r5f29, r5f30, r5f31, r5f32, r5f33, r5f34, r5f35, r5f36, r5f37, r5f38, r5f39, r5f40, r5f41, r5f42, r5f43, r5f44, r5f45, r5f46, r5f47, r5f48, r5f49, r5f50, r5f51, r5f52, r5f53, r5f54, r5f55, r5f56, r5f57, r5f58, r5f59, r5f60, r5f61, r5f62, r5f63, r5f64, r5f65, r5f66, r5f67, r5f68, r5f69, r5f70, r5f71, r5f72, r5f73, r5f74, r5f75, r5f76, r5f77, r5f78, r5f79, r5f80, r5f81, r5f82, r5f83, r5f84, r5f85, r5f86, r5f87, r5f88, r5f89, r5f90, r5f91, r5f92, r5f93, r5f94, r5f95, r5f96, r5f97, r5f98, r5f99, r5f100, r5f101, r5f102, r5f103, r5f104, r5f105, r5f106, r5f107, r5f108, r5f109, r5f110, r5f111, r5f112, r5f113, r5f114, r5f115, r5f116, r5f117, r5f118, r5f119, r5f120, r5f121, r5f122, r5f123, r5f124, r5f125, r5f126, r5f127, r5f128, r5f129, r5f130, r5f131, r5f132, r5f133, r5f134, r5f135, r5f136, r5f137, r5f138, r5f139, r5f140, r5f141, r5f142, r5f143, r5f144, r5f145, r5f146, r5f147, r5f148, r5f149, r5f150, r5fx, r5fy;
var r6f; //, r6f2, r6f3, r6f4, r6f5, r6f6, r6f7, r6f8, r6f9, r6f10, r6f11, r6f12, r6f13, r6f14, r6f15, r6f16, r6f17, r6f18, r6f19, r6f20, r6f21, r6f22, r6f23, r6f24, r6f25, r6f26, r6f27, r6f28, r6f29, r6f30, r6f31, r6f32, r6f33, r6f34, r6f35, r6f36, r6f37, r6f38, r6f39, r6f40, r6f41, r6f42, r6f43, r6f44, r6f45, r6f46, r6f47, r6f48, r6f49, r6f50, r6f51, r6f52, r6f53, r6f54, r6f55, r6f56, r6f57, r6f58, r6f59, r6f60, r6f61, r6f62, r6f63, r6f64, r6f65, r6f66, r6f67, r6f68, r6f69, r6f70, r6f71, r6f72, r6f73, r6f74, r6f75, r6f76, r6f77, r6f78, r6f79, r6f80, r6f81, r6f82, r6f83, r6f84, r6f85, r6f86, r6f87, r6f88, r6f89, r6f90, r6f91, r6f92, r6f93, r6f94, r6f95, r6f96, r6f97, r6f98, r6f99, r6f100, r6f101, r6f102, r6f103, r6f104, r6f105, r6f106, r6f107, r6f108, r6f109, r6f110, r6f111, r6f112, r6f113, r6f114, r6f115, r6f116, r6f117, r6f118, r6f119, r6f120, r6f121, r6f122, r6f123, r6f124, r6f125, r6f126, r6f127, r6f128, r6f129, r6f130, r6f131, r6f132, r6f133, r6f134, r6f135, r6f136, r6f137, r6f138, r6f139, r6f140, r6fx, r6fy;
// var hfx, hfy, hf1, hf2, hf3, hf4, hf5, hf6, hf7, hf8, hf9, hf10, hf11, hf12, hf13, hf14, hf15, hf16, hf17, hf18, hf19, hf20, hf21, hf22, hf23, hf24, hf25, hf26, hf27, hf28, hf29, hf30, hf31, hf32, hf33, hf34, hf35, hf36, hf37, hf38, hf39, hf40, hf41, hf42, hf43, hf44, hf45, hf46, hf47, hf48, hf49, hf50, hf51, hf52, hf53, hf54, hf55, hf56, hf57, hf58, hf59, hf60, hf61, hf62, hf63, hf64, hf65, hf66, hf67, hf68, hf69, hf70, hf71, hf72, hf73, hf74, hf75, hf76, hf77, hf78, hf79, hf80, hf81, hf82, hf83, hf84, hf85, hf86, hf87, hf88, hf89, hf90, hf91, hf92, hf93, hf94, hf95, hf96, hf97, hf98, hf99, hf100, hf101, hf102, hf103, hf104, hf105, hf106, hf107, hf108, hf109, hf110, hf111, hf112, hf113, hf114, hf115, hf116, hf117, hf118, hf119, hf120, hf121, hf122, hf123, hf124, hf125, hf126, hf127, hf128, hf129, hf130, hf131, hf132, hf133, hf134, hf135, hf136, hf137, hf138, hf139, hf140, hf141, hf142, hf143, hf144, hf145, hf146, hf147, hf148, hf149, hf150, hf151, hf152, hf153, hf154, hf155, hf156, hf157, hf158, hf159, hf160, hf161, hf162, hf163, hf164, hf165, hf166, hf167, hf168, hf169, hf170, hf171, hf172, hf173, hf174, hf175, hf176, hf177, hf178, hf179, hf180, hf181, hf182, hf183, hf184, hf185, hf186, hf187, hf188, hf189, hf190, hf191, hf192, hf193, hf194, hf195, hf196, hf197, hf198, hf199, hf200, hf201, hf202, hf203, hf204, hf205, hf206, hf207, hf208, hf209, hf210, hf211, hf212, hf213, hf214, hf215, hf216, hf217, hf218, hf219, hf220, hf221, hf222, hf223, hf224, hf225, hf226, hf227, hf228, hf229, hf230, hf231, hf232, hf233, hf234, hf235, hf236, hf237, hf238, hf239, hf240, hf241, hf242, hf243, hf244, hf245, hf246, hf247, hf248, hf249, hf250;
// var hfx2, hfy2, hf251, hf252, hf253, hf254, hf255, hf256, hf257, hf258, hf259, hf260, hf261, hf262, hf263, hf264, hf265, hf266, hf267, hf268, hf269, hf270, hf271, hf272, hf273, hf274, hf275, hf276, hf277, hf278, hf279, hf280, hf281, hf282, hf283, hf284, hf285, hf286, hf287, hf288, hf289, hf290, hf291, hf292, hf293, hf294, hf295, hf296, hf297, hf298, hf299, hf300, hf301, hf302, hf303, hf304, hf305, hf306, hf307, hf308, hf309, hf310, hf311, hf312, hf313, hf314, hf315, hf316, hf317, hf318, hf319, hf320, hf321, hf322, hf323, hf324, hf325, hf326, hf327, hf328, hf329, hf330, hf331, hf332, hf333, hf334, hf335, hf336, hf337, hf338, hf339, hf340, hf341, hf342, hf343, hf344, hf345, hf346, hf347, hf348, hf349, hf350, hf351, hf352, hf353, hf354, hf355, hf356, hf357, hf358, hf359, hf360, hf361, hf362, hf363, hf364, hf365, hf366, hf367, hf368, hf369, hf370, hf371, hf372, hf373, hf374, hf375, hf376, hf377, hf378, hf379, hf380, hf381, hf382, hf383, hf384, hf385, hf386, hf387, hf388, hf389, hf390, hf391, hf392, hf393, hf394, hf395, hf396, hf397, hf398, hf399, hf400, hf401, hf402, hf403, hf404, hf405, hf406, hf407, hf408, hf409, hf410, hf411, hf412, hf413, hf414, hf415, hf416, hf417, hf418, hf419, hf420, hf421, hf422, hf423, hf424, hf425, hf426, hf427, hf428, hf429, hf430, hf431, hf432, hf433, hf434, hf435, hf436, hf437, hf438, hf439, hf440, hf441, hf442, hf443, hf444, hf445, hf446, hf447, hf448, hf449, hf450, hf451, hf452, hf453, hf454, hf455, hf456, hf457, hf458, hf459, hf460, hf461, hf462, hf463, hf464, hf465, hf466, hf467, hf468, hf469, hf470, hf471, hf472, hf473, hf474, hf475, hf476, hf477, hf478, hf479, hf480, hf481, hf482, hf483, hf484, hf485, hf486, hf487, hf488, hf489, hf490, hf491, hf492, hf493, hf494, hf495, hf496, hf497, hf498, hf499, hf500, hf501, hf502, hf503, hf504, hf505, hf506, hf507, hf508, hf509, hf510, hf511, hf512, hf513, hf514, hf515, hf516, hf517, hf518, hf519, hf520, hf521, hf522, hf523, hf524, hf525, hf526, hf527, hf528, hf529, hf530, hf531, hf532, hf533, hf534, hf535, hf536, hf537, hf538, hf539, hf540;
// var hfx3, hfy3, hf541, hf542, hf543, hf544, hf545, hf546, hf547, hf548, hf549, hf550, hf551, hf552, hf553, hf554, hf555, hf556, hf557, hf558, hf559, hf560, hf561, hf562, hf563, hf564, hf565, hf566, hf567, hf568, hf569, hf570, hf571, hf572, hf573, hf574, hf575, hf576, hf577, hf578, hf579, hf580, hf581, hf581, hf582, hf583, hf584, hf585, hf586, hf587, hf588, hf589, hf590, hf591, hf592, hf593, hf594, hf595, hf596, hf597, hf598, hf599, hf600, hf601, hf602, hf603, hf604, hf605, hf606, hf607, hf608, hf609, hf610, hf611, hf612, hf613, hf614, hf615, hf616, hf617, hf618, hf619, hf620, hf621, hf622, hf623, hf624, hf625, hf626, hf627, hf628, hf629, hf630, hf631, hf632, hf633, hf634, hf635, hf636, hf637, hf638, hf639, hf640, hf641, hf642, hf643, hf644, hf645, hf646, hf647, hf648, hf649, hf650, hf651, hf652, hf653, hf654, hf655, hf656, hf657, hf658, hf659, hf660, hf661, hf662, hf663, hf664, hf665, hf666, hf667, hf668, hf669, hf670, hf671, hf672, hf673, hf674, hf675, hf676, hf677, hf678, hf679, hf680, hf681, hf682, hf683, hf684, hf685, hf686, hf687, hf688, hf689, hf690, hf691, hf692, hf693, hf694, hf695, hf696, hf697, hf698, hf699, hf700, hf701, hf702, hf703, hf704, hf705, hf706, hf707, hf708, hf709, hf710, hf711, hf712, hf713, hf714, hf715, hf716, hf717, hf718;
var p1_sr, p2_sr, p3_sr, p4_sr;
var r1_d_open, r1_d2_open, r2_d_open, r3_d_open, r4_d_open, r5_d_open, r6_ld_open, r6_rd_open, md_open;
var bed, bedImg, sidetable1, sidetable1Img, sidetable2, sidetable2Img, r1cupboard1, r1cupboard1Img, r1cupboard2, r1cupboard2Img, box1, boxImg;
// var randNum = Math.round(random(1, 4));
var bathtub, bathtubImg, sink, sinkImg, toilet, toiletImg;
var kitchenleft, kitchenleftImg, kitchenup, kitchenupImg, fridge, dustbin, fridgeImg, dustbinImg;
var cboard, cboardImg, cmaindesk, cmaindeskImg, cmaindeskchair, cmaindeskchairImg, ctbl1, ctbl1Img, ctbl2, ctbl2Img, ctbl3, ctbl3Img, ctbl4, ctbl4Img, ctbl5, ctbl5Img, ctbl6, ctbl6Img, ctbl7, ctbl7Img, ctbl8, ctbl8Img, ccupboard, ccupboardImg;
var tv, tvImg, sofal, sofalImg, sofar, sofarImg, sofab, sofabImg, r5sidetable, r5sidetableImg, r5sidetable2, r5sidetable2Img, r5centretable;
var diningt, diningtImg, r6cupboardl, r6cupboardlImg, r6cupboardr, r6cupboardrImg, r6shelf1, r6shelf1Img, r6shelf2, r6shelf2Img;

p5.disableFriendlyErrors = true;

function preload() {
  bg_gs0 = loadImage("Images/Background.png");
  vid = createVideo("Video/abc.mp4");
  vid.size(displayWidth, displayHeight - 130);
  vid.hide();
  p1Img = loadImage("Images/p1.png");
  p2Img = loadImage("Images/p2.png");
  p3Img = loadImage("Images/p3.png");
  p4Img = loadImage("Images/p4.png");
  visibility_r_img = loadImage("Images/Visibility radius.png");
  bedImg = loadImage("Images/Bed.png");
  r1fImg = loadImage("Images/r1.png");
  sidetable1Img = loadImage("Images/side table.png");
  sidetable2Img = loadImage("Images/side table 2.png");
  r1cupboard1Img = loadImage("Images/Cupboard1_r1.png");
  r1cupboard2Img = loadImage("Images/Cupboard2_r1.png");
  bathtubImg = loadImage("Images/Bathtub.png");
  sinkImg = loadImage("Images/Sink.png");
  toiletImg = loadImage("Images/Toilet.png");
  kitchenleftImg = loadImage("Images/Kitchen left side.png");
  kitchenupImg = loadImage("Images/Kitchen upper side.png");
  fridgeImg = loadImage("Images/Fridge.png");
  dustbinImg = loadImage("Images/Dustbin.png");
  cboardImg = loadImage("Images/Classroom board.png");
  cmaindeskImg = loadImage("Images/Class main desk.png");
  cmaindeskchairImg = loadImage("Images/Class main desk chair.png");
  ctbl1Img = loadImage("Images/Class table 1.png");
  ctbl2Img = loadImage("Images/Class table 2.png");
  ctbl3Img = loadImage("Images/Class table 3.png");
  ctbl4Img = loadImage("Images/Class table 4.png");
  ctbl5Img = loadImage("Images/Class table 5.png");
  ctbl6Img = loadImage("Images/Class table 6.png");
  ctbl7Img = loadImage("Images/Class table 7.png");
  ctbl8Img = loadImage("Images/Class table 8.png");
  ccupboardImg = loadImage("Images/Class cupboard.png");
  tvImg = loadImage("Images/TV.png");
  sofalImg = loadImage("Images/Sofa 2.png");
  sofarImg = loadImage("Images/Sofa 1.png");
  sofabImg = loadImage("Images/Sofa 3.png");
  r5sidetableImg = loadImage("Images/r5 side table 2.png");
  r5sidetable2Img = loadImage("Images/r5 side table.png");
  diningtImg = loadImage("Images/Dining table.png");
  r6cupboardlImg = loadImage("Images/r6 left cupboard.png");
  r6cupboardrImg = loadImage("Images/r6 right cupboard.png");
  r6shelf1Img = loadImage("Images/r6 shelf.png");
  r6shelf2Img = loadImage("Images/r6 shelf.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight - 130);


  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(255, 255, 255);

  if (gameState === 0)
    background(bg_gs0);

  if (playerCount === 4 && gameState === 0) {
    game.updateS(1);
  }

  if (gameState === 1) {
    background(255, 255, 255);

    // vid.show();
    // vid.play();
    // vid.position(0, 0)

    // vid.onended(() => {
    //   vid.stop();
    //   vid.hide();
    //   player.videoEnded = true;
    //   player.update();
    // });
    // Player.getPlayerInfo();
    // var completed = 0;
    // for (var plr in allPlayers) {
    //   if (allPlayers[plr].videoEnded === true) {
    //     completed += 1;
    //   }
    // }
    // if (completed === 4) {
    //   vid.stop();
    //   vid.hide();
    game.updateS(2);
    game.getState();
    // }
  }

  if (gameState === 2) {
    vid.stop();
    vid.hide();
    game.play();
  }

  // game.hideFormAfterGS0();



  drawSprites();

  if (gameState === 2) {
    // Player.getPlayerInfo();
    game.getDoorStatus();
    var index = 0;
    for (var plr in allPlayers) {
      index += 1;
      if (index === player.index) {
        if (player.index === 1) {
          if (p1_sr.isTouching(r1_d) || p1_sr.isTouching(r1_d2) || p1_sr.isTouching(r2_d) || p1_sr.isTouching(r3_d) || p1_sr.isTouching(r4_d) || p1_sr.isTouching(r5_d) || p1_sr.isTouching(r6_ld) || p1_sr.isTouching(r6_rd) || p1_sr.isTouching(stairs_d) || p1_sr.isTouching(lab_stairs_d) || p1_sr.isTouching(house_md)) {
            if (p1_sr.isTouching(r1_d)) {
              if (r1_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r1_d_open === false)
                game.updateR1d1Status(true, 100, 195, 10, 100);
              else if (keyCode === 32 && r1_d_open === true)
                game.updateR1d1Status(false, 55, 245, 100, 10);
            }
            if (p1_sr.isTouching(r1_d2)) {
              if (r1_d2_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r1_d2_open === false)
                game.updateR1d2Status(true, 250, -354, 100, 10);
              else if (keyCode === 32 && r1_d2_open === true)
                game.updateR1d2Status(false, 200, -313, 10, 100);
            }
            if (p1_sr.isTouching(r2_d)) {
              if (r2_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r2_d_open === false)
                game.updateR2dStatus(true, 325, -110, 10, 100);
              else if (keyCode === 32 && r2_d_open === true)
                game.updateR2dStatus(false, 280, -160, 100, 10);
            }
            if (p1_sr.isTouching(r3_d)) {
              if (r3_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r3_d_open === false)
                game.updateR3dStatus(true, 330, 1040, 100, 10);
              else if (keyCode === 32 && r3_d_open === true)
                game.updateR3dStatus(false, 380, 995, 10, 100);
            }
            if (p1_sr.isTouching(r4_d)) {
              if (r4_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r4_d_open === false)
                game.updateR4dStatus(true, 2250, -30, 10, 100);
              else if (keyCode === 32 && r4_d_open === true)
                game.updateR4dStatus(false, 2205, -80, 100, 10);
            }
            if (p1_sr.isTouching(r5_d)) {
              if (r5_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r5_d_open === false)
                game.updateR5dStatus(true, 1460, 765, 10, 100);
              else if (keyCode === 32 && r5_d_open === true)
                game.updateR5dStatus(false, 1505, 715, 100, 10);
            }
            if (p1_sr.isTouching(r6_ld)) {
              if (r6_ld_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r6_ld_open === false)
                game.updateR6ldStatus(true, 650, 1040, 100, 10);
              else if (keyCode === 32 && r6_ld_open === true)
                game.updateR6ldStatus(false, 600, 995, 10, 100);
            }
            if (p1_sr.isTouching(r6_rd)) {
              if (r6_rd_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r6_rd_open === false)
                game.updateR6rdStatus(true, 1050, 1040, 100, 10);
              else if (keyCode === 32 && r6_rd_open === true)
                game.updateR6rdStatus(false, 1100, 995, 10, 100);
            }
          }
        }
        else if (player.index === 2) {
          if (p2_sr.isTouching(r1_d) || p2_sr.isTouching(r1_d2) || p2_sr.isTouching(r2_d) || p2_sr.isTouching(r3_d) || p2_sr.isTouching(r4_d) || p2_sr.isTouching(r5_d) || p2_sr.isTouching(r6_ld) || p2_sr.isTouching(r6_rd) || p2_sr.isTouching(stairs_d) || p2_sr.isTouching(lab_stairs_d) || p2_sr.isTouching(house_md)) {
            if (p2_sr.isTouching(r1_d)) {
              if (r1_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r1_d_open === false)
                game.updateR1d1Status(true, 100, 195, 10, 100);
              else if (keyCode === 32 && r1_d_open === true)
                game.updateR1d1Status(false, 55, 245, 100, 10);
            }
            if (p2_sr.isTouching(r1_d2)) {
              if (r1_d2_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r1_d2_open === false)
                game.updateR1d2Status(true, 250, -354, 100, 10);
              else if (keyCode === 32 && r1_d2_open === true)
                game.updateR1d2Status(false, 200, -313, 10, 100);
            }
            if (p2_sr.isTouching(r2_d)) {
              if (r2_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r2_d_open === false)
                game.updateR2dStatus(true, 325, -110, 10, 100);
              else if (keyCode === 32 && r2_d_open === true)
                game.updateR2dStatus(false, 280, -160, 100, 10);
            }
            if (p2_sr.isTouching(r3_d)) {
              if (r3_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r3_d_open === false)
                game.updateR3dStatus(true, 330, 1040, 100, 10);
              else if (keyCode === 32 && r3_d_open === true)
                game.updateR3dStatus(false, 380, 995, 10, 100);
            }
            if (p2_sr.isTouching(r4_d)) {
              if (r4_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r4_d_open === false)
                game.updateR4dStatus(true, 2250, -30, 10, 100);
              else if (keyCode === 32 && r4_d_open === true)
                game.updateR4dStatus(false, 2205, -80, 100, 10);
            }
            if (p2_sr.isTouching(r5_d)) {
              if (r5_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r5_d_open === false)
                game.updateR5dStatus(true, 1460, 765, 10, 100);
              else if (keyCode === 32 && r5_d_open === true)
                game.updateR5dStatus(false, 1505, 715, 100, 10);
            }
            if (p2_sr.isTouching(r6_ld)) {
              if (r6_ld_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r6_ld_open === false)
                game.updateR6ldStatus(true, 650, 1040, 100, 10);
              else if (keyCode === 32 && r6_ld_open === true)
                game.updateR6ldStatus(false, 600, 995, 10, 100);
            }
            if (p2_sr.isTouching(r6_rd)) {
              if (r6_rd_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r6_rd_open === false)
                game.updateR6rdStatus(true, 1050, 1040, 100, 10);
              else if (keyCode === 32 && r6_rd_open === true)
                game.updateR6rdStatus(false, 1100, 995, 10, 100);
            }
          }
        }
        else if (player.index === 3) {
          if (p3_sr.isTouching(r1_d) || p3_sr.isTouching(r1_d2) || p3_sr.isTouching(r2_d) || p3_sr.isTouching(r3_d) || p3_sr.isTouching(r4_d) || p3_sr.isTouching(r5_d) || p3_sr.isTouching(r6_ld) || p3_sr.isTouching(r6_rd) || p3_sr.isTouching(stairs_d) || p3_sr.isTouching(lab_stairs_d) || p3_sr.isTouching(house_md)) {
            if (p3_sr.isTouching(r1_d)) {
              if (r1_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r1_d_open === false)
                game.updateR1d1Status(true, 100, 195, 10, 100);
              else if (keyCode === 32 && r1_d_open === true)
                game.updateR1d1Status(false, 55, 245, 100, 10);
            }
            if (p3_sr.isTouching(r1_d2)) {
              if (r1_d2_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r1_d2_open === false)
                game.updateR1d2Status(true, 250, -354, 100, 10);
              else if (keyCode === 32 && r1_d2_open === true)
                game.updateR1d2Status(false, 200, -313, 10, 100);
            }
            if (p3_sr.isTouching(r2_d)) {
              if (r2_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r2_d_open === false)
                game.updateR2dStatus(true, 325, -110, 10, 100);
              else if (keyCode === 32 && r2_d_open === true)
                game.updateR2dStatus(false, 280, -160, 100, 10);
            }
            if (p3_sr.isTouching(r3_d)) {
              if (r3_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r3_d_open === false)
                game.updateR3dStatus(true, 330, 1040, 100, 10);
              else if (keyCode === 32 && r3_d_open === true)
                game.updateR3dStatus(false, 380, 995, 10, 100);
            }
            if (p3_sr.isTouching(r4_d)) {
              if (r4_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r4_d_open === false)
                game.updateR4dStatus(true, 2250, -30, 10, 100);
              else if (keyCode === 32 && r4_d_open === true)
                game.updateR4dStatus(false, 2205, -80, 100, 10);
            }
            if (p3_sr.isTouching(r5_d)) {
              if (r5_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r5_d_open === false)
                game.updateR5dStatus(true, 1460, 765, 10, 100);
              else if (keyCode === 32 && r5_d_open === true)
                game.updateR5dStatus(false, 1505, 715, 100, 10);
            }
            if (p3_sr.isTouching(r6_ld)) {
              if (r6_ld_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r6_ld_open === false)
                game.updateR6ldStatus(true, 650, 1040, 100, 10);
              else if (keyCode === 32 && r6_ld_open === true)
                game.updateR6ldStatus(false, 600, 995, 10, 100);
            }
            if (p3_sr.isTouching(r6_rd)) {
              if (r6_rd_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r6_rd_open === false)
                game.updateR6rdStatus(true, 1050, 1040, 100, 10);
              else if (keyCode === 32 && r6_rd_open === true)
                game.updateR6rdStatus(false, 1100, 995, 10, 100);
            }
          }
        }
        else if (player.index === 4) {
          if (p4_sr.isTouching(r1_d) || p4_sr.isTouching(r1_d2) || p4_sr.isTouching(r2_d) || p4_sr.isTouching(r3_d) || p4_sr.isTouching(r4_d) || p4_sr.isTouching(r5_d) || p4_sr.isTouching(r6_ld) || p4_sr.isTouching(r6_rd) || p4_sr.isTouching(stairs_d) || p4_sr.isTouching(lab_stairs_d) || p4_sr.isTouching(house_md)) {
            if (p4_sr.isTouching(r1_d)) {
              if (r1_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r1_d_open === false)
                game.updateR1d1Status(true, 100, 195, 10, 100);
              else if (keyCode === 32 && r1_d_open === true)
                game.updateR1d1Status(false, 55, 245, 100, 10);
            }
            if (p4_sr.isTouching(r1_d2)) {
              if (r1_d2_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r1_d2_open === false)
                game.updateR1d2Status(true, 250, -354, 100, 10);
              else if (keyCode === 32 && r1_d2_open === true)
                game.updateR1d2Status(false, 200, -313, 10, 100);
            }
            if (p4_sr.isTouching(r2_d)) {
              if (r2_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r2_d_open === false)
                game.updateR2dStatus(true, 325, -110, 10, 100);
              else if (keyCode === 32 && r2_d_open === true)
                game.updateR2dStatus(false, 280, -160, 100, 10);
            }
            if (p4_sr.isTouching(r3_d)) {
              if (r3_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r3_d_open === false)
                game.updateR3dStatus(true, 330, 1040, 100, 10);
              else if (keyCode === 32 && r3_d_open === true)
                game.updateR3dStatus(false, 380, 995, 10, 100);
            }
            if (p4_sr.isTouching(r4_d)) {
              if (r4_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r4_d_open === false)
                game.updateR4dStatus(true, 2250, -30, 10, 100);
              else if (keyCode === 32 && r4_d_open === true)
                game.updateR4dStatus(false, 2205, -80, 100, 10);
            }
            if (p4_sr.isTouching(r5_d)) {
              if (r5_d_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r5_d_open === false)
                game.updateR5dStatus(true, 1460, 765, 10, 100);
              else if (keyCode === 32 && r5_d_open === true)
                game.updateR5dStatus(false, 1505, 715, 100, 10);
            }
            if (p4_sr.isTouching(r6_ld)) {
              if (r6_ld_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r6_ld_open === false)
                game.updateR6ldStatus(true, 650, 1040, 100, 10);
              else if (keyCode === 32 && r6_ld_open === true)
                game.updateR6ldStatus(false, 600, 995, 10, 100);
            }
            if (p4_sr.isTouching(r6_rd)) {
              if (r6_rd_open === false)
                text("Press 'Space' to open the door", players[index - 1].x - 70, players[index - 1].y + 50);
              else
                text("Press 'Space' to close the door", players[index - 1].x - 70, players[index - 1].y + 50);

              if (keyCode === 32 && r6_rd_open === false)
                game.updateR6rdStatus(true, 1050, 1040, 100, 10);
              else if (keyCode === 32 && r6_rd_open === true)
                game.updateR6rdStatus(false, 1100, 995, 10, 100);
            }
          }
        }
      }
    }
  }
}
