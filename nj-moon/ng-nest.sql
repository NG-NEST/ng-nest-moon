-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: localhost    Database: ng-nest
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
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `menuId` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_3ed34464adf967339c44f99ff80` (`menuId`),
  CONSTRAINT `FK_3ed34464adf967339c44f99ff80` FOREIGN KEY (`menuId`) REFERENCES `system_menu` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_action`
--

LOCK TABLES `system_action` WRITE;
/*!40000 ALTER TABLE `system_action` DISABLE KEYS */;
INSERT INTO `system_action` VALUES ('00e0a452-a48e-244e-64e9-8ade6d8bc271','修改','update','icon-edit-2','b69ccd6f-041a-4cad-a5fd-475b63739582'),('0a2f4ce7-7e03-4b79-72ab-b2f1c7b1806c','修改','update','icon-edit-2','acc6b9a6-0e25-4153-925d-171c4c8571ca'),('26043e9e-2773-93c4-255b-d6980aad048a','修改','update','icon-edit-2','292241ae-0591-bd25-d4da-c60ac980682f'),('3b27d845-3496-9fa9-b574-87e9cdb6d3e7','增加','add','icon-plus','7f16db0f-bba0-67db-60e3-3be17fae3fed'),('3eb89353-3bdd-f5d0-b00d-052c006da927','删除','delete','icon-trash-2','292241ae-0591-bd25-d4da-c60ac980682f'),('497bf1af-060c-d47a-9d59-464c6b55fa4e','增加','add','icon-plus','7e4ed6d0-d49f-5211-89ab-f1e9819955a9'),('4a8aef28-a15d-7122-86d9-dc0152e13e4d','查看','info','icon-eye','b69ccd6f-041a-4cad-a5fd-475b63739582'),('4ddcf978-fd15-4c91-98f2-ffbf1f0da553','增加','add','icon-plus','acc6b9a6-0e25-4153-925d-171c4c8571ca'),('4e479a5d-4144-2b81-b540-28cc2f3225a9','查看','info','icon-eye','6245fe47-337c-b983-3401-a908a1b3a660'),('51416df9-edbf-3bdc-843e-98c576b1bdd3','删除','delete','icon-trash-2','b69ccd6f-041a-4cad-a5fd-475b63739582'),('514b71f8-4491-4ce0-f019-f406e95d0a63','删除','delete','icon-trash-2','3a221ac9-434a-058f-7ba0-17770084a089'),('54583935-c451-5352-e6b2-0cbb6bb69c10','查看','info','icon-eye','7e4ed6d0-d49f-5211-89ab-f1e9819955a9'),('64023e86-11e3-0652-cc77-76de64087751','增加','add','icon-plus','6245fe47-337c-b983-3401-a908a1b3a660'),('6b1b7f9d-e768-f2f6-75cd-7f6a69451c9e','删除','delete','icon-trash-2','7f16db0f-bba0-67db-60e3-3be17fae3fed'),('6ba5dd34-2f3c-16e0-a7bb-f252740a3998','删除','delete','icon-trash-2','7e4ed6d0-d49f-5211-89ab-f1e9819955a9'),('72ed8a4a-b5cf-4fb7-d8aa-c2938a491e19','增加','add','icon-plus','3a221ac9-434a-058f-7ba0-17770084a089'),('7ffbec83-d88c-ef7e-0968-efb84600350a','修改','update','icon-edit-2','3a221ac9-434a-058f-7ba0-17770084a089'),('86deb23e-84e7-b904-0544-e292e833571e','查看','info','icon-eye','acc6b9a6-0e25-4153-925d-171c4c8571ca'),('89762686-8c01-528e-f91e-848b1500286b','删除','delete','icon-trash-2','acc6b9a6-0e25-4153-925d-171c4c8571ca'),('90185774-4081-25cc-6a29-d199c097f064','查看','info','icon-eye','3a221ac9-434a-058f-7ba0-17770084a089'),('9aad69a0-a781-5172-e4dd-874db6decce0','修改','update','icon-edit-2','7e4ed6d0-d49f-5211-89ab-f1e9819955a9'),('b54389f5-3d0c-34ea-1e77-5975bb0a59cb','查看','info','icon-eye','292241ae-0591-bd25-d4da-c60ac980682f'),('bdb427ac-5f0f-84e7-3b80-036e41669f6d','修改','update','icon-edit-2','6245fe47-337c-b983-3401-a908a1b3a660'),('d273be9a-a945-a88a-9c0c-034394e6fe31','查看','info','icon-eye','7f16db0f-bba0-67db-60e3-3be17fae3fed'),('d4c011a1-4c30-80b0-ee1d-45e050b1abf6','删除','delete','icon-trash-2','6245fe47-337c-b983-3401-a908a1b3a660'),('e1d32faf-3451-e243-8cbc-498d43ab0679','增加','add','icon-plus','b69ccd6f-041a-4cad-a5fd-475b63739582'),('e6521f6f-2ece-90a2-fa20-791300d3e114','修改','update','icon-edit-2','7f16db0f-bba0-67db-60e3-3be17fae3fed'),('ef5e43f3-0c8f-4f26-fdbb-bc2cc45acb62','增加','add','icon-plus','292241ae-0591-bd25-d4da-c60ac980682f');
/*!40000 ALTER TABLE `system_action` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_col`
--

DROP TABLE IF EXISTS `system_col`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `system_col` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `label` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sort` int(11) NOT NULL,
  `type` json DEFAULT NULL,
  `length` int(11) DEFAULT NULL,
  `primary` tinyint(4) DEFAULT NULL,
  `nullable` tinyint(4) DEFAULT NULL,
  `unique` tinyint(4) DEFAULT NULL,
  `default` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tableId` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_ffb2656480f943927e94318532e` (`tableId`),
  CONSTRAINT `FK_ffb2656480f943927e94318532e` FOREIGN KEY (`tableId`) REFERENCES `system_table` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_col`
--

LOCK TABLES `system_col` WRITE;
/*!40000 ALTER TABLE `system_col` DISABLE KEYS */;
/*!40000 ALTER TABLE `system_col` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_control`
--

DROP TABLE IF EXISTS `system_control`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `system_control` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `required` tinyint(4) DEFAULT NULL,
  `disabled` tinyint(4) DEFAULT NULL,
  `readonly` tinyint(4) DEFAULT NULL,
  `hide` tinyint(4) DEFAULT NULL,
  `primary` tinyint(4) NOT NULL,
  `sort` int(11) NOT NULL,
  `col` json DEFAULT NULL,
  `type` json NOT NULL,
  `group` json DEFAULT NULL,
  `pageId` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_71c3bf30155ee1f0c19e92181f5` (`pageId`),
  CONSTRAINT `FK_71c3bf30155ee1f0c19e92181f5` FOREIGN KEY (`pageId`) REFERENCES `system_page` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_control`
--

LOCK TABLES `system_control` WRITE;
/*!40000 ALTER TABLE `system_control` DISABLE KEYS */;
/*!40000 ALTER TABLE `system_control` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_menu`
--

DROP TABLE IF EXISTS `system_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `system_menu` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `label` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `router` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parentId` varchar(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `path` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `FK_d7fcb6cbe5c416b793101e32a3f` (`parentId`),
  CONSTRAINT `FK_d7fcb6cbe5c416b793101e32a3f` FOREIGN KEY (`parentId`) REFERENCES `system_menu` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
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
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createTime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updateTime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_module`
--

LOCK TABLES `system_module` WRITE;
/*!40000 ALTER TABLE `system_module` DISABLE KEYS */;
/*!40000 ALTER TABLE `system_module` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_organization`
--

DROP TABLE IF EXISTS `system_organization`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `system_organization` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `label` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parentId` varchar(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `path` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `FK_86110f24fd2d3afdba313c5060d` (`parentId`),
  CONSTRAINT `FK_86110f24fd2d3afdba313c5060d` FOREIGN KEY (`parentId`) REFERENCES `system_organization` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
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
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `moduleId` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_cd172e2eea0e95fbfd852d6d699` (`moduleId`),
  CONSTRAINT `FK_cd172e2eea0e95fbfd852d6d699` FOREIGN KEY (`moduleId`) REFERENCES `system_module` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_page`
--

LOCK TABLES `system_page` WRITE;
/*!40000 ALTER TABLE `system_page` DISABLE KEYS */;
/*!40000 ALTER TABLE `system_page` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_page_relation`
--

DROP TABLE IF EXISTS `system_page_relation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `system_page_relation` (
  `fromPageId` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `toPageId` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`fromPageId`,`toPageId`),
  KEY `FK_6c166329aff74304c4c25390a5f` (`toPageId`),
  CONSTRAINT `FK_6c166329aff74304c4c25390a5f` FOREIGN KEY (`toPageId`) REFERENCES `system_page` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_6d3a58ca78d46588756f27fdffc` FOREIGN KEY (`fromPageId`) REFERENCES `system_page` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
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
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_role`
--

LOCK TABLES `system_role` WRITE;
/*!40000 ALTER TABLE `system_role` DISABLE KEYS */;
INSERT INTO `system_role` VALUES ('469c5d65-11fc-a83a-d077-578780f492a5','系统管理员'),('67cfddbe-1e24-2e72-f6e7-b5c88e4b7284','总裁'),('6bdb4fd4-4327-05c8-6850-070ad284346b','总监'),('9a0664e8-faa7-3255-40ac-4adf53d50909','总经理'),('be1e8826-5003-b9e4-7dee-b42cb9b8240b','管理员');
/*!40000 ALTER TABLE `system_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_role_action`
--

DROP TABLE IF EXISTS `system_role_action`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `system_role_action` (
  `roleId` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `actionId` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`roleId`,`actionId`),
  KEY `FK_a0ec504b9c427ffcc85e212594c` (`actionId`),
  CONSTRAINT `FK_25439811e232662e2dc087330d9` FOREIGN KEY (`roleId`) REFERENCES `system_role` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_a0ec504b9c427ffcc85e212594c` FOREIGN KEY (`actionId`) REFERENCES `system_action` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_role_action`
--

LOCK TABLES `system_role_action` WRITE;
/*!40000 ALTER TABLE `system_role_action` DISABLE KEYS */;
INSERT INTO `system_role_action` VALUES ('469c5d65-11fc-a83a-d077-578780f492a5','00e0a452-a48e-244e-64e9-8ade6d8bc271'),('469c5d65-11fc-a83a-d077-578780f492a5','0a2f4ce7-7e03-4b79-72ab-b2f1c7b1806c'),('469c5d65-11fc-a83a-d077-578780f492a5','26043e9e-2773-93c4-255b-d6980aad048a'),('469c5d65-11fc-a83a-d077-578780f492a5','3b27d845-3496-9fa9-b574-87e9cdb6d3e7'),('469c5d65-11fc-a83a-d077-578780f492a5','3eb89353-3bdd-f5d0-b00d-052c006da927'),('469c5d65-11fc-a83a-d077-578780f492a5','497bf1af-060c-d47a-9d59-464c6b55fa4e'),('469c5d65-11fc-a83a-d077-578780f492a5','4a8aef28-a15d-7122-86d9-dc0152e13e4d'),('469c5d65-11fc-a83a-d077-578780f492a5','4ddcf978-fd15-4c91-98f2-ffbf1f0da553'),('469c5d65-11fc-a83a-d077-578780f492a5','4e479a5d-4144-2b81-b540-28cc2f3225a9'),('469c5d65-11fc-a83a-d077-578780f492a5','51416df9-edbf-3bdc-843e-98c576b1bdd3'),('469c5d65-11fc-a83a-d077-578780f492a5','514b71f8-4491-4ce0-f019-f406e95d0a63'),('469c5d65-11fc-a83a-d077-578780f492a5','54583935-c451-5352-e6b2-0cbb6bb69c10'),('469c5d65-11fc-a83a-d077-578780f492a5','64023e86-11e3-0652-cc77-76de64087751'),('469c5d65-11fc-a83a-d077-578780f492a5','6b1b7f9d-e768-f2f6-75cd-7f6a69451c9e'),('469c5d65-11fc-a83a-d077-578780f492a5','6ba5dd34-2f3c-16e0-a7bb-f252740a3998'),('469c5d65-11fc-a83a-d077-578780f492a5','72ed8a4a-b5cf-4fb7-d8aa-c2938a491e19'),('469c5d65-11fc-a83a-d077-578780f492a5','7ffbec83-d88c-ef7e-0968-efb84600350a'),('469c5d65-11fc-a83a-d077-578780f492a5','86deb23e-84e7-b904-0544-e292e833571e'),('469c5d65-11fc-a83a-d077-578780f492a5','89762686-8c01-528e-f91e-848b1500286b'),('469c5d65-11fc-a83a-d077-578780f492a5','90185774-4081-25cc-6a29-d199c097f064'),('469c5d65-11fc-a83a-d077-578780f492a5','9aad69a0-a781-5172-e4dd-874db6decce0'),('469c5d65-11fc-a83a-d077-578780f492a5','b54389f5-3d0c-34ea-1e77-5975bb0a59cb'),('469c5d65-11fc-a83a-d077-578780f492a5','bdb427ac-5f0f-84e7-3b80-036e41669f6d'),('469c5d65-11fc-a83a-d077-578780f492a5','d273be9a-a945-a88a-9c0c-034394e6fe31'),('469c5d65-11fc-a83a-d077-578780f492a5','d4c011a1-4c30-80b0-ee1d-45e050b1abf6'),('469c5d65-11fc-a83a-d077-578780f492a5','e1d32faf-3451-e243-8cbc-498d43ab0679'),('469c5d65-11fc-a83a-d077-578780f492a5','e6521f6f-2ece-90a2-fa20-791300d3e114'),('469c5d65-11fc-a83a-d077-578780f492a5','ef5e43f3-0c8f-4f26-fdbb-bc2cc45acb62');
/*!40000 ALTER TABLE `system_role_action` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_table`
--

DROP TABLE IF EXISTS `system_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `system_table` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `transform` json DEFAULT NULL,
  `moduleId` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_18b6873e5862386d08dcb5f3452` (`moduleId`),
  CONSTRAINT `FK_18b6873e5862386d08dcb5f3452` FOREIGN KEY (`moduleId`) REFERENCES `system_module` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_table`
--

LOCK TABLES `system_table` WRITE;
/*!40000 ALTER TABLE `system_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `system_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_user`
--

DROP TABLE IF EXISTS `system_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `system_user` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `account` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_user`
--

LOCK TABLES `system_user` WRITE;
/*!40000 ALTER TABLE `system_user` DISABLE KEYS */;
INSERT INTO `system_user` VALUES ('02d0e88f-65f8-b30c-d4cb-6aafde0efc0d','test','123456','mail','15988888888',''),('38d7164b-3be4-417c-b3f5-fe077d596953','admin','123qwe','123@123.com','15888888888','管理员'),('715c3e87-63a8-cf4d-b556-0f149e0a89e8','mary','123qwe','123@qq.com','15999999999',''),('865d7f8c-3213-02f9-b8f3-cf7e1ce4dc26','jacks','123qwe','123@123.com','12399999999','');
/*!40000 ALTER TABLE `system_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_user_organization`
--

DROP TABLE IF EXISTS `system_user_organization`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `system_user_organization` (
  `userId` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `organizationId` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`userId`,`organizationId`),
  KEY `FK_68941b8e6cc24f7f5cc3898edb4` (`organizationId`),
  CONSTRAINT `FK_68941b8e6cc24f7f5cc3898edb4` FOREIGN KEY (`organizationId`) REFERENCES `system_organization` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_9a2b15d16e0199fd81dec2407b2` FOREIGN KEY (`userId`) REFERENCES `system_user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_user_organization`
--

LOCK TABLES `system_user_organization` WRITE;
/*!40000 ALTER TABLE `system_user_organization` DISABLE KEYS */;
INSERT INTO `system_user_organization` VALUES ('02d0e88f-65f8-b30c-d4cb-6aafde0efc0d','14b135a5-05f6-8362-bf17-0ba7d9f9b650'),('38d7164b-3be4-417c-b3f5-fe077d596953','14b135a5-05f6-8362-bf17-0ba7d9f9b650'),('715c3e87-63a8-cf4d-b556-0f149e0a89e8','14b135a5-05f6-8362-bf17-0ba7d9f9b650'),('865d7f8c-3213-02f9-b8f3-cf7e1ce4dc26','14b135a5-05f6-8362-bf17-0ba7d9f9b650'),('02d0e88f-65f8-b30c-d4cb-6aafde0efc0d','4980001f-45af-4a92-a68a-e1e5b128a637'),('38d7164b-3be4-417c-b3f5-fe077d596953','4980001f-45af-4a92-a68a-e1e5b128a637'),('02d0e88f-65f8-b30c-d4cb-6aafde0efc0d','6695dfb3-1097-5524-cc31-09e2167571b0'),('38d7164b-3be4-417c-b3f5-fe077d596953','6695dfb3-1097-5524-cc31-09e2167571b0'),('02d0e88f-65f8-b30c-d4cb-6aafde0efc0d','8029f46f-d82a-257c-97ef-64715f5ec88c'),('715c3e87-63a8-cf4d-b556-0f149e0a89e8','8029f46f-d82a-257c-97ef-64715f5ec88c'),('715c3e87-63a8-cf4d-b556-0f149e0a89e8','adaa0488-7c5e-7f73-290f-a172a85f987a'),('715c3e87-63a8-cf4d-b556-0f149e0a89e8','c5d4d432-67d1-6171-d2f8-51a65ce05817');
/*!40000 ALTER TABLE `system_user_organization` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_user_role`
--

DROP TABLE IF EXISTS `system_user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `system_user_role` (
  `userId` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roleId` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`userId`,`roleId`),
  KEY `FK_4c2ae6cf44ed3a1e1040122db4b` (`roleId`),
  CONSTRAINT `FK_4c2ae6cf44ed3a1e1040122db4b` FOREIGN KEY (`roleId`) REFERENCES `system_role` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_8b51fc7bf87d9a9aada9c504544` FOREIGN KEY (`userId`) REFERENCES `system_user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_user_role`
--

LOCK TABLES `system_user_role` WRITE;
/*!40000 ALTER TABLE `system_user_role` DISABLE KEYS */;
INSERT INTO `system_user_role` VALUES ('02d0e88f-65f8-b30c-d4cb-6aafde0efc0d','469c5d65-11fc-a83a-d077-578780f492a5'),('38d7164b-3be4-417c-b3f5-fe077d596953','469c5d65-11fc-a83a-d077-578780f492a5'),('865d7f8c-3213-02f9-b8f3-cf7e1ce4dc26','469c5d65-11fc-a83a-d077-578780f492a5'),('02d0e88f-65f8-b30c-d4cb-6aafde0efc0d','67cfddbe-1e24-2e72-f6e7-b5c88e4b7284'),('02d0e88f-65f8-b30c-d4cb-6aafde0efc0d','6bdb4fd4-4327-05c8-6850-070ad284346b'),('715c3e87-63a8-cf4d-b556-0f149e0a89e8','6bdb4fd4-4327-05c8-6850-070ad284346b');
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

-- Dump completed on 2019-03-24 18:12:17
