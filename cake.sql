-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.5.5-10.0.14-MariaDB - mariadb.org binary distribution
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  8.3.0.4694
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出 cake 的数据库结构
CREATE DATABASE IF NOT EXISTS `cake` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `cake`;


-- 导出  表 cake.goods 结构
CREATE TABLE IF NOT EXISTS `goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bianhao` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `timber` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `price` float NOT NULL DEFAULT '0',
  `imgurl` varchar(50) NOT NULL DEFAULT '0',
  `fenlei` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- 正在导出表  cake.goods 的数据：~21 rows (大约)
/*!40000 ALTER TABLE `goods` DISABLE KEYS */;
REPLACE INTO `goods` (`id`, `bianhao`, `timber`, `price`, `imgurl`, `fenlei`) VALUES
	(1, '我想要的幸福', '圆形欧式水果蛋糕，各色时令水果方格式艺术', 188, '../img/711673175228.jpg', 'hot'),
	(2, '生日快乐 编号：711023', '草莓、芒果、奇异果、火龙果、奶油', 198, '../img/711023175228.jpg', 'hot'),
	(3, '相爱一生 编号：711029', '巧克力、奶油、哈密瓜、奇异果、圣女果', 208, '../img/711029175228.jpg', 'hot'),
	(4, '玫瑰色恋人 编号：701731', '新鲜时令水果搭配玫瑰花装饰', 198, '../img/701731175228.jpg', 'hot'),
	(5, '熊猫贝贝 编号：711035', '时令水果、鸡蛋、奶油、巧克力', 198, '../img/711035175228.jpg', 'hot'),
	(6, '甜心芭比 编号：711003', '新鲜奶油搭配时令水果', 198, '../img/711003175228.jpg', 'hot'),
	(7, '奖状数码蛋糕 编号：721035', '新鲜奶油搭配时令水果；奖状为食用糯米', 298, '../img/721035175228.jpg', 'hot'),
	(8, '七彩果园', '方形水果蛋糕，新鲜奶油、果肉铺面，水果夹', 228, '../img/701709175228.jpg', 'birthday'),
	(9, '愿得一人心 编号：721018', '新鲜奶油，时令水果，鸡蛋牛奶水果夹', 198, '../img/721018175228.jpg', 'birthday'),
	(10, '美好祝愿 编号：711688', '心形水果蛋糕，水果艺术装饰，巧克力', 198, '../img/711688175228.jpg', 'birthday'),
	(11, '不变的心 编号：711693', '心形欧式水果蛋糕，各色水果、巧克力', 198, '../img/711693175228.jpg', 'birthday'),
	(12, '快乐无限 编号：711701', '圆形欧式水果蛋糕，巧克力片围边', 198, '../img/711701175228.jpg', 'birthday'),
	(13, '微微一笑', '新鲜奶油，绵密的新鲜当季的时令水果', 188, '../img/712001175228.jpg', 'birthday'),
	(14, '明明白白我的心编号：721030', '时令水果，新鲜奶油，外围玫瑰花瓣', 238, '../img/721030175228.jpg', 'birthday'),
	(15, '七彩果园', '方形水果蛋糕，新鲜奶油、果肉铺面', 228, '../img/706038175228.jpg', 'toast'),
	(16, '七彩果园', '方形水果蛋糕，新鲜奶油、果肉铺面', 228, '../img/703078175228.jpg', 'toast'),
	(17, '七彩果园', '方形水果蛋糕，新鲜奶油、果肉铺面', 228, '../img/703086175228.jpg', 'toast'),
	(18, '七彩果园', '方形水果蛋糕，新鲜奶油、果肉铺面', 228, '../img/706055175228.jpg', 'toast'),
	(19, '七彩果园', '方形水果蛋糕，新鲜奶油、果肉铺面', 228, '../img/706061175228.jpg', 'toast'),
	(20, '七彩果园', '方形水果蛋糕，新鲜奶油、果肉铺面', 228, '../img/707060175228.jpg', 'toast'),
	(21, '七彩果园', '方形水果蛋糕，新鲜奶油、果肉铺面', 228, '../img/707061175228.jpg', 'toast');
/*!40000 ALTER TABLE `goods` ENABLE KEYS */;


-- 导出  表 cake.users 结构
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL DEFAULT '0',
  `psd` varchar(50) NOT NULL DEFAULT '0',
  `phone` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- 正在导出表  cake.users 的数据：~1 rows (大约)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
REPLACE INTO `users` (`id`, `username`, `psd`, `phone`) VALUES
	(1, '搞事情', '123456', '13800138000');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
