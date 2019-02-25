-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: nj-nest
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `system_action`
--

DROP TABLE IF EXISTS `system_action`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `system_action` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `icon` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `menuId` varchar(36) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_3ed34464adf967339c44f99ff80` (`menuId`),
  CONSTRAINT `FK_3ed34464adf967339c44f99ff80` FOREIGN KEY (`menuId`) REFERENCES `system_menu` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_action`
--

LOCK TABLES `system_action` WRITE;
/*!40000 ALTER TABLE `system_action` DISABLE KEYS */;
INSERT INTO `system_action` VALUES ('01eb22db-469d-c603-1900-71bc77e5ad22','删除','icon-trash-2','delete','7f16db0f-bba0-67db-60e3-3be17fae3fed'),('06da1c10-e6a5-3e7d-5eba-030d88649335','查看','icon-eye','info','7e4ed6d0-d49f-5211-89ab-f1e9819955a9'),('07fa9bba-cb45-1547-6d84-ff010d4523c3','删除','icon-trash-2','delete','3a221ac9-434a-058f-7ba0-17770084a089'),('0e08825b-8005-3dbf-db82-522b3cc57dd8','增加','icon-plus','add','6245fe47-337c-b983-3401-a908a1b3a660'),('353a8846-9e2c-aec6-69e5-54d44072b9e3','查看','icon-eye','info','b69ccd6f-041a-4cad-a5fd-475b63739582'),('3810c30f-2023-2fed-a6d0-728c17d67d32','修改','icon-edit-2','update','7e4ed6d0-d49f-5211-89ab-f1e9819955a9'),('3ea69fdd-9f8d-4b20-6fe9-1536d016ebeb','增加','icon-plus','add','7e4ed6d0-d49f-5211-89ab-f1e9819955a9'),('3ed7caf4-3df8-098c-1839-cb755ea943cd','增加','icon-plus','add','3a221ac9-434a-058f-7ba0-17770084a089'),('5308a038-ab41-c9fd-dce0-670b441ab0d8','查看','icon-eye','info','acc6b9a6-0e25-4153-925d-171c4c8571ca'),('5477e0ea-38c3-156c-b67e-0fddc1ac2210','修改','icon-edit-2','update','3a221ac9-434a-058f-7ba0-17770084a089'),('5b2ae5a1-3f84-f916-da76-3699bdb7a269','修改','icon-edit-2','update','292241ae-0591-bd25-d4da-c60ac980682f'),('6d1fbe5e-5d19-8412-adda-7a0aefc12aa8','增加','icon-plus','add','292241ae-0591-bd25-d4da-c60ac980682f'),('71565f92-a1fa-0f9e-6be5-356f61028759','增加','icon-plus','add','b69ccd6f-041a-4cad-a5fd-475b63739582'),('71ac81c2-b24d-7e02-16d3-a5c2be44aa7c','增加','icon-plus','add','acc6b9a6-0e25-4153-925d-171c4c8571ca'),('7a186958-5818-1590-806f-895573bbfa4f','删除','icon-trash-2','delete','292241ae-0591-bd25-d4da-c60ac980682f'),('7dc6e968-516d-9812-eac3-5b6f27b3e1bb','删除','icon-trash-2','delete','7e4ed6d0-d49f-5211-89ab-f1e9819955a9'),('8ea7927c-628a-3575-71d8-ac87c8c00297','删除','icon-trash-2','delete','acc6b9a6-0e25-4153-925d-171c4c8571ca'),('9a274bc2-a04f-774f-eb1a-927236b8af05','查看','icon-eye','info','6245fe47-337c-b983-3401-a908a1b3a660'),('9b24c25e-f987-65c4-2dba-d96e9e79eeb0','删除','icon-trash-2','delete','b69ccd6f-041a-4cad-a5fd-475b63739582'),('c1af55f0-fc74-9b95-e581-75f2d740d285','修改','icon-edit-2','update','acc6b9a6-0e25-4153-925d-171c4c8571ca'),('c6d7ee42-b982-cf0d-2e53-5179140fb3e5','修改','icon-edit-2','update','6245fe47-337c-b983-3401-a908a1b3a660'),('c7fb6189-d60d-d3ea-28d8-817b1cd6ee0d','增加','icon-plus','add','7f16db0f-bba0-67db-60e3-3be17fae3fed'),('c8544510-78a1-2854-307e-e0576162bbf7','修改','icon-edit-2','update','b69ccd6f-041a-4cad-a5fd-475b63739582'),('c98ca681-b0bd-9326-0fb0-81430b74c4ab','查看','icon-eye','info','292241ae-0591-bd25-d4da-c60ac980682f'),('df525cbf-f8dd-95e9-9cd3-066d05e645ac','查看','icon-eye','info','7f16db0f-bba0-67db-60e3-3be17fae3fed'),('e5418bd6-c41c-3ccf-eb44-b1cfec35edb9','修改','icon-edit-2','update','7f16db0f-bba0-67db-60e3-3be17fae3fed'),('f96b9f40-7e1a-15f4-1af6-f8912c9abad3','查看','icon-eye','info','3a221ac9-434a-058f-7ba0-17770084a089'),('fd825d86-276c-1d91-0df0-9b28a4600105','删除','icon-trash-2','delete','6245fe47-337c-b983-3401-a908a1b3a660');
/*!40000 ALTER TABLE `system_action` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_control`
--

DROP TABLE IF EXISTS `system_control`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `system_control` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `pageId` varchar(36) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_71c3bf30155ee1f0c19e92181f5` (`pageId`),
  CONSTRAINT `FK_71c3bf30155ee1f0c19e92181f5` FOREIGN KEY (`pageId`) REFERENCES `system_page` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_control`
--

LOCK TABLES `system_control` WRITE;
/*!40000 ALTER TABLE `system_control` DISABLE KEYS */;
INSERT INTO `system_control` VALUES ('7da73d57-8776-814b-dbb4-dd96a1f00c01','密码','password',NULL,'0aff95ff-6de2-021a-4b45-f1228f9a9913'),('8300d947-c1df-bd06-945d-4131bcc70acf','邮箱','email',NULL,'0aff95ff-6de2-021a-4b45-f1228f9a9913'),('acd028a6-15b5-376a-dd22-ea25904af3e6','账号','account','','0aff95ff-6de2-021a-4b45-f1228f9a9913'),('af2817b0-2f9c-4125-c79b-3495e2953df5','姓名','name',NULL,'0aff95ff-6de2-021a-4b45-f1228f9a9913'),('e17fa1b6-add1-806c-5c2b-3c2a72eb042b','手机号','phone',NULL,'0aff95ff-6de2-021a-4b45-f1228f9a9913');
/*!40000 ALTER TABLE `system_control` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_menu`
--

DROP TABLE IF EXISTS `system_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `system_menu` (
  `id` varchar(36) NOT NULL,
  `label` varchar(255) NOT NULL,
  `router` varchar(255) NOT NULL,
  `icon` varchar(255) NOT NULL,
  `parentId` varchar(36) DEFAULT NULL,
  `path` text,
  PRIMARY KEY (`id`),
  KEY `FK_d7fcb6cbe5c416b793101e32a3f` (`parentId`),
  CONSTRAINT `FK_d7fcb6cbe5c416b793101e32a3f` FOREIGN KEY (`parentId`) REFERENCES `system_menu` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_menu`
--

LOCK TABLES `system_menu` WRITE;
/*!40000 ALTER TABLE `system_menu` DISABLE KEYS */;
INSERT INTO `system_menu` VALUES ('292241ae-0591-bd25-d4da-c60ac980682f','角色管理','role','icon-file','b69ccd6f-041a-4cad-a5fd-475b63739582','b69ccd6f-041a-4cad-a5fd-475b63739582.292241ae-0591-bd25-d4da-c60ac980682f'),('3a221ac9-434a-058f-7ba0-17770084a089','模块设计','module','icon-zap',NULL,'3a221ac9-434a-058f-7ba0-17770084a089'),('6245fe47-337c-b983-3401-a908a1b3a660','示例页面','examples','icon-grid',NULL,'6245fe47-337c-b983-3401-a908a1b3a660'),('7e4ed6d0-d49f-5211-89ab-f1e9819955a9','组织机构','organization','icon-users','b69ccd6f-041a-4cad-a5fd-475b63739582','b69ccd6f-041a-4cad-a5fd-475b63739582.7e4ed6d0-d49f-5211-89ab-f1e9819955a9'),('7f16db0f-bba0-67db-60e3-3be17fae3fed','用户管理','account','icon-user','b69ccd6f-041a-4cad-a5fd-475b63739582','b69ccd6f-041a-4cad-a5fd-475b63739582.7f16db0f-bba0-67db-60e3-3be17fae3fed'),('acc6b9a6-0e25-4153-925d-171c4c8571ca','菜单管理','menu','icon-list','b69ccd6f-041a-4cad-a5fd-475b63739582','b69ccd6f-041a-4cad-a5fd-475b63739582.acc6b9a6-0e25-4153-925d-171c4c8571ca'),('b69ccd6f-041a-4cad-a5fd-475b63739582','系统管理','$','icon-settings',NULL,'b69ccd6f-041a-4cad-a5fd-475b63739582');
/*!40000 ALTER TABLE `system_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_module`
--

DROP TABLE IF EXISTS `system_module`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `system_module` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `updateDate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_module`
--

LOCK TABLES `system_module` WRITE;
/*!40000 ALTER TABLE `system_module` DISABLE KEYS */;
INSERT INTO `system_module` VALUES ('5447ae12-3cad-6273-f473-50e42b307434','用户管理','用户管理描述','icon-user',NULL),('5e847fc4-c290-af47-5ea5-50aa61696a50','需求管理','需求管理描','icon-home',NULL),('9a584ec8-3d23-1bfb-5cb8-b40582dbb174','组织机构','组织机构描述','icon-users',NULL),('a95a605e-5df1-4887-3090-d46cdfad3328','菜单管理','菜单管理描述','icon-list',NULL),('c07d36db-922e-39d7-4a79-cacd767198fb','客户管理','客户信息士大夫','icon-home',NULL),('f20eda79-8189-2148-b146-0c4207fbd9e2','角色管理','角色管理描述','icon-file',NULL),('f53e6186-d2ef-a21d-7d40-e2628997a87c','示例页面','示例页面描述','icon-home',NULL);
/*!40000 ALTER TABLE `system_module` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_organization`
--

DROP TABLE IF EXISTS `system_organization`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `system_organization` (
  `id` varchar(36) NOT NULL,
  `label` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `icon` varchar(255) NOT NULL,
  `parentId` varchar(36) DEFAULT NULL,
  `path` text,
  PRIMARY KEY (`id`),
  KEY `FK_86110f24fd2d3afdba313c5060d` (`parentId`),
  CONSTRAINT `FK_86110f24fd2d3afdba313c5060d` FOREIGN KEY (`parentId`) REFERENCES `system_organization` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_organization`
--

LOCK TABLES `system_organization` WRITE;
/*!40000 ALTER TABLE `system_organization` DISABLE KEYS */;
INSERT INTO `system_organization` VALUES ('14b135a5-05f6-8362-bf17-0ba7d9f9b650','财务部','group','icon','4980001f-45af-4a92-a68a-e1e5b128a637','4980001f-45af-4a92-a68a-e1e5b128a637.14b135a5-05f6-8362-bf17-0ba7d9f9b650'),('4980001f-45af-4a92-a68a-e1e5b128a637','雷浩集团','root','icon',NULL,'4980001f-45af-4a92-a68a-e1e5b128a637'),('6695dfb3-1097-5524-cc31-09e2167571b0','销售部','group','icon','4980001f-45af-4a92-a68a-e1e5b128a637','4980001f-45af-4a92-a68a-e1e5b128a637.6695dfb3-1097-5524-cc31-09e2167571b0'),('8029f46f-d82a-257c-97ef-64715f5ec88c','行政部','group','icon','4980001f-45af-4a92-a68a-e1e5b128a637','4980001f-45af-4a92-a68a-e1e5b128a637.8029f46f-d82a-257c-97ef-64715f5ec88c'),('adaa0488-7c5e-7f73-290f-a172a85f987a','人事部','gourp','icon','4980001f-45af-4a92-a68a-e1e5b128a637','4980001f-45af-4a92-a68a-e1e5b128a637.adaa0488-7c5e-7f73-290f-a172a85f987a'),('c5d4d432-67d1-6171-d2f8-51a65ce05817','项目部','group','icon','4980001f-45af-4a92-a68a-e1e5b128a637','4980001f-45af-4a92-a68a-e1e5b128a637.c5d4d432-67d1-6171-d2f8-51a65ce05817'),('fe77519d-4467-214e-647b-e0089e45306d','生产部','group','icon','4980001f-45af-4a92-a68a-e1e5b128a637','4980001f-45af-4a92-a68a-e1e5b128a637.fe77519d-4467-214e-647b-e0089e45306d');
/*!40000 ALTER TABLE `system_organization` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_page`
--

DROP TABLE IF EXISTS `system_page`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `system_page` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `moduleId` varchar(255) DEFAULT NULL,
  `code` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_cd172e2eea0e95fbfd852d6d699` (`moduleId`),
  CONSTRAINT `FK_cd172e2eea0e95fbfd852d6d699` FOREIGN KEY (`moduleId`) REFERENCES `system_module` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_page`
--

LOCK TABLES `system_page` WRITE;
/*!40000 ALTER TABLE `system_page` DISABLE KEYS */;
INSERT INTO `system_page` VALUES ('0aff95ff-6de2-021a-4b45-f1228f9a9913','用户详情','','5447ae12-3cad-6273-f473-50e42b307434','user-info'),('cb35038c-b342-9b13-e9de-8d15cd941643','用户列表','','5447ae12-3cad-6273-f473-50e42b307434','user-list'),('cf2c70ba-0279-7221-0c30-e97c4901af56','13','564',NULL,'');
/*!40000 ALTER TABLE `system_page` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_page_relation`
--

DROP TABLE IF EXISTS `system_page_relation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `system_page_relation` (
  `fromPageId` varchar(36) NOT NULL,
  `toPageId` varchar(36) NOT NULL,
  PRIMARY KEY (`fromPageId`,`toPageId`),
  KEY `FK_6c166329aff74304c4c25390a5f` (`toPageId`),
  CONSTRAINT `FK_6c166329aff74304c4c25390a5f` FOREIGN KEY (`toPageId`) REFERENCES `system_page` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_6d3a58ca78d46588756f27fdffc` FOREIGN KEY (`fromPageId`) REFERENCES `system_page` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_page_relation`
--

LOCK TABLES `system_page_relation` WRITE;
/*!40000 ALTER TABLE `system_page_relation` DISABLE KEYS */;
/*!40000 ALTER TABLE `system_page_relation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_role`
--

DROP TABLE IF EXISTS `system_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `system_role` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_role`
--

LOCK TABLES `system_role` WRITE;
/*!40000 ALTER TABLE `system_role` DISABLE KEYS */;
INSERT INTO `system_role` VALUES ('469c5d65-11fc-a83a-d077-578780f492a5','系统管理员'),('67cfddbe-1e24-2e72-f6e7-b5c88e4b7284','总裁'),('6bdb4fd4-4327-05c8-6850-070ad284346b','总监'),('9a0664e8-faa7-3255-40ac-4adf53d50909','总经理'),('be1e8826-5003-b9e4-7dee-b42cb9b8240b','管理员'),('e8e23f3c-bb3c-5824-685b-5915c7de2f07','34');
/*!40000 ALTER TABLE `system_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_role_action`
--

DROP TABLE IF EXISTS `system_role_action`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `system_role_action` (
  `roleId` varchar(36) NOT NULL,
  `actionId` varchar(36) NOT NULL,
  PRIMARY KEY (`roleId`,`actionId`),
  KEY `FK_a0ec504b9c427ffcc85e212594c` (`actionId`),
  CONSTRAINT `FK_25439811e232662e2dc087330d9` FOREIGN KEY (`roleId`) REFERENCES `system_role` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_a0ec504b9c427ffcc85e212594c` FOREIGN KEY (`actionId`) REFERENCES `system_action` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_role_action`
--

LOCK TABLES `system_role_action` WRITE;
/*!40000 ALTER TABLE `system_role_action` DISABLE KEYS */;
INSERT INTO `system_role_action` VALUES ('469c5d65-11fc-a83a-d077-578780f492a5','01eb22db-469d-c603-1900-71bc77e5ad22'),('469c5d65-11fc-a83a-d077-578780f492a5','06da1c10-e6a5-3e7d-5eba-030d88649335'),('469c5d65-11fc-a83a-d077-578780f492a5','07fa9bba-cb45-1547-6d84-ff010d4523c3'),('469c5d65-11fc-a83a-d077-578780f492a5','0e08825b-8005-3dbf-db82-522b3cc57dd8'),('469c5d65-11fc-a83a-d077-578780f492a5','353a8846-9e2c-aec6-69e5-54d44072b9e3'),('469c5d65-11fc-a83a-d077-578780f492a5','3810c30f-2023-2fed-a6d0-728c17d67d32'),('469c5d65-11fc-a83a-d077-578780f492a5','3ea69fdd-9f8d-4b20-6fe9-1536d016ebeb'),('469c5d65-11fc-a83a-d077-578780f492a5','3ed7caf4-3df8-098c-1839-cb755ea943cd'),('469c5d65-11fc-a83a-d077-578780f492a5','5308a038-ab41-c9fd-dce0-670b441ab0d8'),('469c5d65-11fc-a83a-d077-578780f492a5','5477e0ea-38c3-156c-b67e-0fddc1ac2210'),('469c5d65-11fc-a83a-d077-578780f492a5','5b2ae5a1-3f84-f916-da76-3699bdb7a269'),('469c5d65-11fc-a83a-d077-578780f492a5','6d1fbe5e-5d19-8412-adda-7a0aefc12aa8'),('469c5d65-11fc-a83a-d077-578780f492a5','71565f92-a1fa-0f9e-6be5-356f61028759'),('469c5d65-11fc-a83a-d077-578780f492a5','71ac81c2-b24d-7e02-16d3-a5c2be44aa7c'),('469c5d65-11fc-a83a-d077-578780f492a5','7a186958-5818-1590-806f-895573bbfa4f'),('469c5d65-11fc-a83a-d077-578780f492a5','7dc6e968-516d-9812-eac3-5b6f27b3e1bb'),('469c5d65-11fc-a83a-d077-578780f492a5','8ea7927c-628a-3575-71d8-ac87c8c00297'),('469c5d65-11fc-a83a-d077-578780f492a5','9a274bc2-a04f-774f-eb1a-927236b8af05'),('469c5d65-11fc-a83a-d077-578780f492a5','9b24c25e-f987-65c4-2dba-d96e9e79eeb0'),('469c5d65-11fc-a83a-d077-578780f492a5','c1af55f0-fc74-9b95-e581-75f2d740d285'),('469c5d65-11fc-a83a-d077-578780f492a5','c6d7ee42-b982-cf0d-2e53-5179140fb3e5'),('469c5d65-11fc-a83a-d077-578780f492a5','c7fb6189-d60d-d3ea-28d8-817b1cd6ee0d'),('469c5d65-11fc-a83a-d077-578780f492a5','c8544510-78a1-2854-307e-e0576162bbf7'),('469c5d65-11fc-a83a-d077-578780f492a5','c98ca681-b0bd-9326-0fb0-81430b74c4ab'),('469c5d65-11fc-a83a-d077-578780f492a5','df525cbf-f8dd-95e9-9cd3-066d05e645ac'),('469c5d65-11fc-a83a-d077-578780f492a5','e5418bd6-c41c-3ccf-eb44-b1cfec35edb9'),('469c5d65-11fc-a83a-d077-578780f492a5','f96b9f40-7e1a-15f4-1af6-f8912c9abad3'),('469c5d65-11fc-a83a-d077-578780f492a5','fd825d86-276c-1d91-0df0-9b28a4600105');
/*!40000 ALTER TABLE `system_role_action` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_user`
--

DROP TABLE IF EXISTS `system_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `system_user` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `account` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_user`
--

LOCK TABLES `system_user` WRITE;
/*!40000 ALTER TABLE `system_user` DISABLE KEYS */;
INSERT INTO `system_user` VALUES ('38d7164b-3be4-417c-b3f5-fe077d596953','超级管理员','admin','123qwe','123@123.com','15888888888'),('715c3e87-63a8-cf4d-b556-0f149e0a89e8','mary','mary','123qwe','123@qq.com','15999999999'),('865d7f8c-3213-02f9-b8f3-cf7e1ce4dc26','jacks','jacks','123qwe','123@123.com','12399999999');
/*!40000 ALTER TABLE `system_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_user_organization`
--

DROP TABLE IF EXISTS `system_user_organization`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `system_user_organization` (
  `userId` varchar(36) NOT NULL,
  `organizationId` varchar(36) NOT NULL,
  PRIMARY KEY (`userId`,`organizationId`),
  KEY `FK_68941b8e6cc24f7f5cc3898edb4` (`organizationId`),
  CONSTRAINT `FK_68941b8e6cc24f7f5cc3898edb4` FOREIGN KEY (`organizationId`) REFERENCES `system_organization` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_9a2b15d16e0199fd81dec2407b2` FOREIGN KEY (`userId`) REFERENCES `system_user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_user_organization`
--

LOCK TABLES `system_user_organization` WRITE;
/*!40000 ALTER TABLE `system_user_organization` DISABLE KEYS */;
INSERT INTO `system_user_organization` VALUES ('715c3e87-63a8-cf4d-b556-0f149e0a89e8','14b135a5-05f6-8362-bf17-0ba7d9f9b650'),('865d7f8c-3213-02f9-b8f3-cf7e1ce4dc26','14b135a5-05f6-8362-bf17-0ba7d9f9b650'),('38d7164b-3be4-417c-b3f5-fe077d596953','4980001f-45af-4a92-a68a-e1e5b128a637'),('715c3e87-63a8-cf4d-b556-0f149e0a89e8','8029f46f-d82a-257c-97ef-64715f5ec88c'),('715c3e87-63a8-cf4d-b556-0f149e0a89e8','adaa0488-7c5e-7f73-290f-a172a85f987a'),('715c3e87-63a8-cf4d-b556-0f149e0a89e8','c5d4d432-67d1-6171-d2f8-51a65ce05817');
/*!40000 ALTER TABLE `system_user_organization` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_user_role`
--

DROP TABLE IF EXISTS `system_user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `system_user_role` (
  `userId` varchar(36) NOT NULL,
  `roleId` varchar(36) NOT NULL,
  PRIMARY KEY (`userId`,`roleId`),
  KEY `FK_4c2ae6cf44ed3a1e1040122db4b` (`roleId`),
  CONSTRAINT `FK_4c2ae6cf44ed3a1e1040122db4b` FOREIGN KEY (`roleId`) REFERENCES `system_role` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_8b51fc7bf87d9a9aada9c504544` FOREIGN KEY (`userId`) REFERENCES `system_user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_user_role`
--

LOCK TABLES `system_user_role` WRITE;
/*!40000 ALTER TABLE `system_user_role` DISABLE KEYS */;
INSERT INTO `system_user_role` VALUES ('38d7164b-3be4-417c-b3f5-fe077d596953','469c5d65-11fc-a83a-d077-578780f492a5'),('715c3e87-63a8-cf4d-b556-0f149e0a89e8','469c5d65-11fc-a83a-d077-578780f492a5'),('865d7f8c-3213-02f9-b8f3-cf7e1ce4dc26','469c5d65-11fc-a83a-d077-578780f492a5'),('715c3e87-63a8-cf4d-b556-0f149e0a89e8','6bdb4fd4-4327-05c8-6850-070ad284346b');
/*!40000 ALTER TABLE `system_user_role` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-02-25 21:35:04
