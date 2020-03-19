DROP TABLE IF EXISTS locacao;
DROP TABLE IF EXISTS cliente;
DROP TABLE IF EXISTS estado;
DROP TABLE IF EXISTS estado;
DROP TABLE IF EXISTS despesa;
DROP TABLE IF EXISTS veiculo;
DROP TABLE IF EXISTS veiculo_despesas;
DROP TABLE IF EXISTS tipo_despesa;
DROP TABLE IF EXISTS tipo_veiculo;
DROP TABLE IF EXISTS marca;
DROP TABLE IF EXISTS categoria;
DROP TABLE IF EXISTS cor;
DROP TABLE IF exists hibernate_sequence;

CREATE  TABLE cor (
id INTEGER AUTO_INCREMENT primary KEY,
descricao VARCHAR(50) NOT NULL
);

CREATE TABLE categoria(
id INTEGER AUTO_INCREMENT primary KEY,
descricao  VARCHAR(50) NOT NULL,
valor_diaria DOUBLE NOT NULL,
valor_multa DOUBLE NOT NULL
);

CREATE TABLE marca(
id INTEGER AUTO_INCREMENT primary KEY,
descricao  VARCHAR(50) NOT NULL
);

CREATE TABLE tipo_veiculo(
id INTEGER AUTO_INCREMENT primary KEY,
descricao  VARCHAR(50) NOT NULL
);

CREATE TABLE tipo_despesa(
id INTEGER AUTO_INCREMENT primary KEY,
descricao  VARCHAR(50) NOT NULL
);

CREATE TABLE despesa(
id INTEGER AUTO_INCREMENT primary KEY,
descricao  VARCHAR(50) NOT NULL,
data DATE NOT NULL,
valor DOUBLE NOT NULL,
tipo INTEGER,
  FOREIGN KEY (tipo) REFERENCES tipo_despesa (id)
);

CREATE TABLE veiculo(
id INTEGER AUTO_INCREMENT primary KEY,
marca INTEGER,
modelo VARCHAR(50),
ano SMALLINT,
cor INTEGER,
categoria INTEGER,
tipo INTEGER,
placa VARCHAR(10),
chassi VARCHAR(50),
 FOREIGN KEY (marca) REFERENCES marca (id),
  FOREIGN KEY (cor) REFERENCES cor (id),
  FOREIGN KEY (categoria) REFERENCES categoria (id),
  FOREIGN KEY (tipo) REFERENCES tipo_veiculo (id)
);

CREATE TABLE estado(
id INTEGER AUTO_INCREMENT primary KEY,
nome VARCHAR(50),
sigla CHAR(2)
);

CREATE TABLE cliente (
id INTEGER AUTO_INCREMENT primary KEY,
nome VARCHAR (255),
cpf CHAR (11),
data_nascimento DATE,
logradouro VARCHAR (255),
numero SMALLINT,
bairro VARCHAR (255),
cep CHAR(8),
cidade VARCHAR (255),
estado_id INTEGER,
	FOREIGN KEY (estado_id) REFERENCES estado (id)
);

CREATE TABLE locacao(
id INTEGER AUTO_INCREMENT primary KEY,
id_veiculo INTEGER,
id_cliente INTEGER,
data_inicio DATE,
data_previsao DATE,
data_entrega DATE,
valor DOUBLE,
	FOREIGN KEY (id_veiculo) REFERENCES veiculo (id),
	FOREIGN KEY (id_cliente) REFERENCES cliente (id)
);


 INSERT INTO estado (sigla,nome) VALUES('AC','Acre');  
 INSERT INTO estado (sigla,nome) VALUES('AL','Alagoas');  
 INSERT INTO estado (sigla,nome) VALUES('AM','Amazonas');
 INSERT INTO estado (sigla,nome) VALUES('AP','Amapá');
 INSERT INTO estado (sigla,nome) VALUES('BA','Bahia');
 INSERT INTO estado (sigla,nome) VALUES('CE','Ceará');
 INSERT INTO estado (sigla,nome) VALUES('DF','Distrito Federal');
 INSERT INTO estado (sigla,nome) VALUES('ES','Espírito Santo');
 INSERT INTO estado (sigla,nome) VALUES('GO','Goiás');
 INSERT INTO estado (sigla,nome) VALUES('MA','Maranhão');
 INSERT INTO estado (sigla,nome) VALUES('MG','Minas Gerais');
 INSERT INTO estado (sigla,nome) VALUES('MS','Mato Grosso do Sul');
 INSERT INTO estado (sigla,nome) VALUES('MT','Mato Grosso');
 INSERT INTO estado (sigla,nome) VALUES('PA','Pará');
 INSERT INTO estado (sigla,nome) VALUES('PB','Paraíba');
 INSERT INTO estado (sigla,nome) VALUES('PE','Pernambuco');
 INSERT INTO estado (sigla,nome) VALUES('PI','Piauí');
 INSERT INTO estado (sigla,nome) VALUES('PR','Paraná');
 INSERT INTO estado (sigla,nome) VALUES('RJ','Rio de Janeiro');
 INSERT INTO estado (sigla,nome) VALUES('RN','Rio Grande do Norte');
 INSERT INTO estado (sigla,nome) VALUES('RO','Rondônia');
 INSERT INTO estado (sigla,nome) VALUES('RR','Roraima');
 INSERT INTO estado (sigla,nome) VALUES('RS','Rio Grande do Sul');
 INSERT INTO estado (sigla,nome) VALUES('SC','Santa Catarina');
 INSERT INTO estado (sigla,nome) VALUES('SE','Sergipe');
 INSERT INTO estado (sigla,nome) VALUES('SP','São Paulo');
 INSERT INTO estado (sigla,nome) VALUES('TO','Tocantins');
 
INSERT INTO cor (descricao) VALUES ('Azul') ;
INSERT INTO cor (descricao) VALUES ('Branco') ;
INSERT INTO cor (descricao) VALUES ('Cinza') ;
INSERT INTO cor (descricao) VALUES ('Marrom') ;
INSERT INTO cor (descricao) VALUES ('Prata') ;
INSERT INTO cor (descricao) VALUES ('Preto') ;
INSERT INTO cor (descricao) VALUES ('Verde') ;
INSERT INTO cor (descricao) VALUES ('Vermelho'); 

INSERT INTO tipo_despesa (descricao) VALUES ('Borracharia'); 
INSERT INTO tipo_despesa (descricao) VALUES ('Combustível'); 
INSERT INTO tipo_despesa (descricao) VALUES ('Revisão'); 
INSERT INTO tipo_despesa (descricao) values ('Funilaria');
INSERT INTO tipo_despesa (id, descricao) VALUES (99, 'Outro'); 

INSERT INTO tipo_veiculo (descricao) VALUES ('Hatch');
INSERT INTO tipo_veiculo (descricao) VALUES ('Sedan');
INSERT INTO tipo_veiculo (descricao) VALUES ('SUV');

INSERT INTO categoria (descricao, valor_diaria, valor_multa) VALUES ('Camionete', 200.00, 5);
INSERT INTO categoria (descricao, valor_diaria, valor_multa) VALUES ('Econômico', 50.00, 3);
INSERT INTO categoria (descricao, valor_diaria, valor_multa) VALUES ('Esportivo', 300.00, 10);
INSERT INTO categoria (descricao, valor_diaria, valor_multa) VALUES ('Família', 100.00, 5);
INSERT INTO categoria (descricao, valor_diaria, valor_multa) VALUES ('Luxo', 250.00, 20);

INSERT INTO cliente (nome,cpf,data_nascimento,logradouro,numero,bairro,cep,cidade,estado_id) VALUES ('Desirae',79580152697,'08-02-20','P.O. Box 100, 3017 Mus. St.',545,'Wie',24937588,'Vienna',8),('Nevada',30530146343,'29-03-20','359-8181 Tempus Road',8260,'Oryol Oblast',80148145,'Oryol',6),('Brock',74401489231,'20-04-19','Ap #319-7754 Posuere Ave',1357,'La Libertad',16581566,'Chepén',9),('Gabriel',15877145487,'06-03-20','P.O. Box 183, 574 Vel, Avenue',9905,'Balochistan',80473966,'Barkhan',9),('Amal',20385176191,'14-10-19','954-8324 Magnis Ave',4849,'Overijssel',92926568,'Deventer',3),('Marsden',19245963626,'13-06-20','Ap #171-9828 Rhoncus. Rd.',6551,'Leinster',30238632,'Dublin',4),('Benedict',77506418981,'30-12-19','744-3816 Luctus Rd.',3165,'Quebec',75323673,'Kawawachikamach',23),('Cassidy',96004135658,'31-12-19','8069 Mauris Road',3733,'Gaz',91052639,'İslahiye',26),('Price',55704392865,'11-01-20','936-1016 Vel St.',4104,'AN',99981191,'Lichtaart',25),('Lyle',32946942415,'02-10-20','764-2239 Sed St.',5741,'Emilia-Romagna',47114544,'Zerba',7);
INSERT INTO cliente (nome,cpf,data_nascimento,logradouro,numero,bairro,cep,cidade,estado_id) VALUES ('Barrett',30638407915,'24-10-20','156-9041 Amet, Road',8089,'CAJ',34289068,'Cajamarca',26),('Brenna',96815626819,'09-08-20','854-6849 Ipsum St.',3098,'PIU',52841371,'Sullana',17),('Oscar',28493419579,'24-12-20','1909 Purus Street',8518,'Bretagne',22518190,'Quimper',21),('Aladdin',26859960166,'22-03-20','Ap #782-439 Dui, Av.',5638,'Östergötlands län',95092911,'Linköping',11),('Scott',49971401774,'23-01-20','2310 Eleifend Avenue',2430,'Haute-Normandie',91996768,'Rouen',11),('Tyler',48364158802,'16-05-19','Ap #591-5205 Proin Av.',424,'Gävleborgs län',49161755,'Sandviken',8),('Kasper',84506963524,'21-05-19','1934 Massa. Ave',5915,'San José',37448550,'Alajuelita',4),('Ahmed',12765065373,'06-09-20','P.O. Box 276, 9065 Cursus Rd.',7413,'CAM',35823181,'San Pietro al Tanagro',21),('Hiram',88076170740,'15-08-20','Ap #495-7434 Aliquet St.',8392,'CT',59544130,'New Haven',12),('Alan',64390558169,'02-11-20','286-5825 Tincidunt Rd.',2282,'Biobío',98942498,'San Rosendo',16);
INSERT INTO cliente (nome,cpf,data_nascimento,logradouro,numero,bairro,cep,cidade,estado_id) VALUES ('Camilla',14925280171,'24-12-19','P.O. Box 879, 9080 Aliquet, St.',1158,'Guanacaste',60981456,'Liberia',9),('Mikayla',25131106956,'04-03-19','Ap #734-7038 Erat. Ave',5837,'KD',50673836,'Kaduna',6),('Hermione',12815506590,'27-11-19','Ap #578-8512 Suspendisse Rd.',9520,'Namen',74456211,'Bovesse',2),('Veronica',34653734457,'16-12-19','274-7716 Amet, Av.',9832,'L',67904674,'Dublin',13),('Lydia',53725985230,'22-02-20','Ap #462-8308 Pede St.',3080,'WL',28461708,'Bathgate',18),('Calista',88882157247,'17-06-19','Ap #564-5787 Enim Rd.',8852,'C',21228907,'Galway',27),('Jameson',87360329553,'06-05-20','Ap #563-5895 Quisque St.',3783,'Ontario',94142817,'Scarborough',5),('Jillian',62610843156,'04-09-19','219-6690 Cras Street',6062,'HR',12576145,'Gurgaon',5),('Cecilia',60835870645,'22-09-19','371-4840 Dictum. Avenue',5678,'Uttar Pradesh',23693198,'Faizabad',17),('Zia',81994999117,'16-03-19','P.O. Box 533, 6960 Urna St.',3330,'Novosibirsk Oblast',82487518,'Novosibirsk',14);
INSERT INTO cliente (nome,cpf,data_nascimento,logradouro,numero,bairro,cep,cidade,estado_id) VALUES ('Seth',30908937048,'16-11-20','Ap #276-4740 Ipsum Street',7021,'Waals-Brabant',38130108,'Thorembais-Saint-Trond',7),('Hall',44454328425,'20-02-19','P.O. Box 797, 4605 Gravida Avenue',474,'Alberta',51565016,'Canmore',4),('Gray',69898055824,'04-02-19','P.O. Box 786, 5649 Metus. St.',4554,'Orenburg Oblast',11789853,'Orenburg',2),('Lars',13150439452,'15-06-19','362-7155 Nulla Ave',9697,'Stockholms län',69639189,'Tumba',21),('Kaden',30059611466,'28-04-20','Ap #994-8325 Nunc Rd.',7604,'TUL',70742611,'Tula',27),('Micah',32553686077,'31-12-19','P.O. Box 563, 3849 Aenean Rd.',8240,'C',76285224,'Galway',9),('Orlando',64478190491,'02-03-20','P.O. Box 379, 3162 Erat St.',7831,'Gye',96839337,'Anyang',2),('Ethan',69417643919,'02-03-19','9846 Lacus Av.',1257,'BE',90204385,'Makurdi',24),('Dustin',25166088301,'17-02-20','384-7239 Dui, Av.',926,'Newfoundland and Labrador',77859488,'Rigolet',13),('Freya',27063405141,'23-10-19','905-336 Magna. Ave',4143,'Niedersachsen',90870196,'Cuxhaven',8);
INSERT INTO cliente (nome,cpf,data_nascimento,logradouro,numero,bairro,cep,cidade,estado_id) VALUES ('Amery',93187676204,'30-01-20','Ap #336-6004 Semper Ave',4642,'PE',34893430,'Petrolina',12),('Althea',56762787989,'20-03-19','3798 Orci, Road',6400,'Vienna',19659092,'Vienna',26),('Yuli',44283664267,'19-07-19','9945 Inceptos Rd.',5315,'Maranhão',86204730,'Timon',2),('Larissa',66003251117,'28-08-20','9752 Lacus Av.',179,'TOS',27212552,'Pisa',14),('Unity',85321211566,'11-08-20','Ap #234-4473 Tellus. Rd.',358,'L',16626720,'Dublin',24),('Elmo',17327494422,'29-11-19','471 Purus Rd.',4250,'SI',34690254,'Blenheim',7),('Cyrus',20410705440,'27-03-19','Ap #266-6759 Curae; Ave',4618,'Alberta',95897383,'High Level',16),('Colin',28200134552,'08-12-19','Ap #299-6101 Vitae Street',8012,'Berlin',25458917,'Berlin',25),('Jane',64185177534,'19-10-19','1286 Aenean Ave',4409,'Gye',78500096,'Yongin',25),('Shaine',96822489963,'26-07-20','P.O. Box 416, 8866 Nec Avenue',8325,'LOM',70150450,'Galbiate',20);
INSERT INTO cliente (nome,cpf,data_nascimento,logradouro,numero,bairro,cep,cidade,estado_id) VALUES ('Armand',98495893842,'10-05-19','P.O. Box 675, 7671 Mauris Avenue',1555,'Castilla y León',28584183,'Burgos',11),('Olivia',62666287894,'28-09-19','6743 Pellentesque Avenue',6621,'Noord Brabant',31778249,'Heusden',17),('Joseph',29669691001,'25-06-19','962-171 Feugiat. St.',2943,'Punjab',23559267,'Matiari',16),('Priscilla',81421089420,'19-09-20','Ap #640-9778 Vel St.',4966,'CAL',53958635,'Isola di Capo Rizzuto',14),('Bianca',91067154332,'01-02-20','467-6935 Scelerisque St.',1267,'West-Vlaanderen',62967929,'Zwevegem',15),('Reuben',99667516599,'02-06-19','P.O. Box 656, 396 Dictum Rd.',809,'ON',27493780,'Thunder Bay',9),('Mollie',27595300848,'23-02-19','Ap #996-9867 Penatibus St.',7238,'Gaz',17457787,'Gaziantep',16),('Marah',17421940424,'04-01-21','979-3376 Eleifend St.',2480,'AN',84410533,'Carnoustie',5),('Emma',88363289626,'19-02-19','356-7370 Risus Rd.',6877,'LIG',24482910,'Villa Faraldi',7),('Jason',30512675187,'01-11-19','P.O. Box 151, 4411 Ac Rd.',3862,'South Sumatra',33917415,'Palembang',6);
INSERT INTO cliente (nome,cpf,data_nascimento,logradouro,numero,bairro,cep,cidade,estado_id) VALUES ('Chaim',53774194833,'16-06-19','P.O. Box 616, 5238 Pede Rd.',5633,'North Jeolla',53654167,'Iksan',9),('Marvin',41569680389,'14-10-19','Ap #763-3812 Penatibus Street',5905,'North Island',22614401,'Te Puke',21),('Walker',56092622793,'16-05-20','6713 Mauris. Road',6261,'A',64209809,'San Rafael',15),('Isabelle',63472097284,'21-03-19','P.O. Box 148, 1340 Rutrum Road',8746,'AB',20983002,'Lidingo',12),('Lewis',34141645704,'14-11-20','P.O. Box 584, 9049 Vivamus St.',9636,'MA',80233675,'Leganés',20),('Sandra',48517133668,'23-03-20','Ap #799-9666 Cras Street',9414,'Västra Götalands län',79796799,'Göteborg',6),('Armand',11744207598,'27-09-20','Ap #189-7319 Nisi Rd.',8950,'Sicilia',76183204,'Nicolosi',23),('Kiona',56704244721,'03-05-19','P.O. Box 773, 1259 Ultricies Street',5059,'Wie',36002800,'Vienna',19),('Bertha',42394615544,'09-10-19','231-5512 Nulla Road',8617,'South Gyeongsang',25738319,'Yangsan',15),('Elvis',30298144039,'14-01-20','224-2939 In Av.',6241,'Yuc',38313359,'Mérida',23);
INSERT INTO cliente (nome,cpf,data_nascimento,logradouro,numero,bairro,cep,cidade,estado_id) VALUES ('Stella',59239414210,'07-06-19','Ap #502-2284 Feugiat. Ave',7632,'Morayshire',33242469,'Forres',11),('Sierra',42268401922,'08-06-20','Ap #352-5119 Volutpat. St.',2391,'Texas',34404768,'Houston',17),('Wynter',71601136277,'03-10-19','P.O. Box 188, 8674 Sem St.',5462,'Vienna',79085480,'Vienna',25),('Dorothy',61550779806,'21-07-20','1852 Dignissim Ave',4120,'Vienna',72593984,'Vienna',11),('Walker',13567623330,'29-11-19','P.O. Box 531, 8527 Elementum, Avenue',784,'HH',93334142,'Hamburg',2),('Curran',82724164343,'26-04-20','P.O. Box 146, 8192 Adipiscing Avenue',5789,'Vienna',93358920,'Vienna',22),('Veda',62188648722,'25-12-20','P.O. Box 418, 6822 Ligula St.',7589,'Östergötlands län',17758909,'Mjölby',9),('Hillary',75620596773,'23-04-19','Ap #272-2295 Phasellus St.',9139,'SI',85364904,'Invercargill',6),('Macaulay',11272613083,'27-03-19','Ap #959-1543 Aliquet, Road',6723,'Cartago',32433024,'Turrialba',2),('Britanni',92556125008,'02-06-19','Ap #354-9737 Id Av.',7376,'Victoria',57478518,'Horsham',7);
INSERT INTO cliente (nome,cpf,data_nascimento,logradouro,numero,bairro,cep,cidade,estado_id) VALUES ('Travis',82131475458,'31-01-20','567 Ornare St.',8438,'La Libertad',98986392,'Pacasmayo',13),('Dominique',98796418598,'17-08-19','P.O. Box 537, 8237 Elit, Av.',2735,'ARE',39916137,'Arequipa',27),('Stone',88459792857,'04-01-21','696-3977 Consectetuer, Ave',4019,'Wie',24896456,'Vienna',11),('Nash',49988192940,'08-06-19','870-3423 Dolor. Av.',3528,'SO',83391710,'Sokoto',16),('Lyle',42469584362,'09-10-20','Ap #490-6727 Nec Avenue',4039,'G',35437106,'Nicoya',5),('Cassandra',75027123631,'22-06-19','P.O. Box 597, 9306 Risus, Av.',9966,'HH',49732331,'Hamburg',6),('Nero',40512656503,'12-01-21','331-3023 Pellentesque Av.',8004,'CUS',17080034,'Sicuani',12),('Cassidy',26327393824,'22-01-19','Ap #144-9297 Metus. Ave',6546,'Cartago',17093185,'Carmen',22),('Caleb',59609647716,'28-07-20','7816 Mattis. St.',9300,'North Island',48750822,'Lower Hutt',25),('Kaitlin',95572639049,'09-02-19','1506 Mus. Rd.',2662,'Comunitat Valenciana',77132471,'Elx',25);
INSERT INTO cliente (nome,cpf,data_nascimento,logradouro,numero,bairro,cep,cidade,estado_id) VALUES ('Fuller',75096834575,'19-01-21','447-4157 Aliquam Road',6727,'Metropolitana de Santiago',51420084,'Isla de Maipo',24),('Carlos',95819352981,'18-04-19','P.O. Box 286, 7360 In Ave',1121,'Bremen',60500164,'Bremen',9),('Dominic',89817671726,'04-06-19','521 Semper. Avenue',3922,'Bolívar',56374370,'Magangué',18),('Joshua',34679770428,'17-04-19','563-6486 Ut Rd.',5004,'KT',34407110,'Katsina',20),('Bertha',44444994090,'06-09-19','243-8173 Semper St.',55,'HH',28155195,'Hamburg',16),('Marah',34841354977,'16-01-20','Ap #727-5342 Vitae, Ave',3566,'West Bengal',66473093,'Balurghat',17),('Cruz',76736985560,'10-09-19','830-7308 Risus. Road',8447,'RM',24135016,'Paine',12),('Tad',78828435060,'14-03-19','6573 Ut Ave',8324,'KIR',92386257,'Kirov',17),('Marcia',48159092250,'06-12-19','971-7286 Non Rd.',9240,'Limburg',77739831,'Nerem',20),('Jorden',57299114887,'22-06-20','P.O. Box 988, 7951 Integer Avenue',2859,'NI',56670068,'Wellington',22);
INSERT INTO cliente (nome,cpf,data_nascimento,logradouro,numero,bairro,cep,cidade,estado_id) VALUES ('Wayne',77115655773,'19-05-19','529-1342 Bibendum St.',7755,'Gye',94411194,'Gumi',8),('Bertha',16221371624,'20-02-19','481-2747 Ultrices Av.',288,'ARE',38001681,'Arequipa',21),('Francis',72924696861,'25-11-19','Ap #694-3479 Natoque Rd.',5017,'PU',64312818,'Okara',24),('Fredericka',74551041258,'20-06-19','P.O. Box 882, 9508 Ligula Av.',8383,'IRK',14090971,'Irkutsk',23),('Phyllis',64268574408,'23-12-19','Ap #638-9598 Sit St.',202,'Dalarnas län',98694454,'Mora',5),('Xandra',17509133575,'06-11-19','Ap #264-1735 Sagittis. St.',4061,'Arequipa',92179436,'Arequipa',26),('Cyrus',95109493657,'16-11-19','Ap #585-5683 Bibendum St.',9828,'BE',66120326,'Berlin',17),('Miranda',50875525880,'04-02-20','2141 Ut Av.',7977,'Alajuela',66282094,'San Rafael',27),('Marny',11951795841,'05-07-19','857-873 Lorem, St.',1296,'Khyber Pakhtoonkhwa',57229490,'Karak',16),('Kimberly',29185296843,'18-07-20','P.O. Box 878, 844 Pharetra Rd.',8860,'Friesland',31581190,'Heerenveen',25);
INSERT INTO cliente (nome,cpf,data_nascimento,logradouro,numero,bairro,cep,cidade,estado_id) VALUES ('Chaim',93612645069,'09-12-19','7213 Orci Rd.',4169,'Puno',27474572,'Juliaca',15),('Palmer',66895631824,'08-04-19','7003 Enim Av.',883,'Castilla y León',91095545,'Soria',7),('Samantha',84395851608,'26-01-19','P.O. Box 607, 7326 Ante. Rd.',7392,'AK',21078972,'Neelum Valley',25),('Quyn',87796963295,'26-06-19','813-5266 Elit, Avenue',1433,'Kogi',61078566,'Okene',13),('Sonia',74129136403,'12-08-20','523-2840 Elit Road',6123,'Ontario',12705317,'Merrickville-Wolford',25),('Hashim',32641027619,'28-11-19','6420 Non Avenue',3405,'JB',68283749,'Depok',2),('Tatyana',12504573249,'06-06-20','Ap #999-7042 Aenean Rd.',6015,'Essex',89522767,'Southend',22),('Nichole',42030682290,'22-08-19','Ap #984-5435 Consectetuer St.',1218,'E',22610107,'Mjölby',2),('Christine',97856161536,'02-09-20','Ap #849-3961 Cursus. Road',4082,'Maranhão',57485551,'Imperatriz',23),('Winifred',12284693949,'25-06-20','Ap #594-8688 Eu Rd.',109,'C',26030412,'Galway',26);
INSERT INTO cliente (nome,cpf,data_nascimento,logradouro,numero,bairro,cep,cidade,estado_id) VALUES ('Cherokee',92823460905,'06-01-20','Ap #379-7063 Dolor St.',1470,'Ohio',43435716,'Columbus',8),('Fritz',64791867716,'03-04-20','6771 Senectus Rd.',2780,'Lubuskie',93918834,'Gorzów Wielkopolski',21),('Jenette',62742772905,'13-08-19','P.O. Box 264, 2156 Mi Road',6101,'La Libertad',24938337,'Trujillo',3),('Leo',87542856153,'25-09-19','151-8187 Elit. Ave',3363,'Berlin',99555080,'Berlin',22),('Mannix',99177446588,'13-05-20','P.O. Box 954, 3639 Amet St.',7866,'North Sumatra',54129621,'Medan',10),('Petra',32610025339,'07-06-19','803-923 Orci Road',8581,'Noord Brabant',86706814,'Waalwijk',1),('Dillon',28982371050,'05-05-19','341-713 Nec Street',741,'Rio de Janeiro',41973017,'Belford Roxo',15),('Murphy',39245070682,'29-04-19','P.O. Box 918, 5917 Velit Rd.',3652,'Anambra',53650182,'Awka',20),('Kay',80417010891,'13-11-19','5708 Risus. Rd.',8936,'Jej',29007377,'Jeju',6),('Walker',32504696978,'22-11-20','960-7541 Eu Road',617,'Overijssel',55880670,'Hengelo',15);
INSERT INTO cliente (nome,cpf,data_nascimento,logradouro,numero,bairro,cep,cidade,estado_id) VALUES ('Xerxes',12243751933,'18-04-19','Ap #311-5750 Pede. Street',321,'LA',56049576,'Lagos',13),('Hayley',47264492635,'26-04-19','575-6929 Cursus St.',8709,'QLD',80690652,'Brisbane',11),('Gray',15640961171,'09-03-19','P.O. Box 974, 1203 Blandit Street',9345,'łódzkie',89262253,'Piotrków Trybunalski',20),('Logan',41823314626,'01-09-20','3512 Fusce Rd.',9503,'VB',87954959,'Beigem',17),('Dana',74078748457,'17-09-19','P.O. Box 652, 6025 A Av.',1489,'PNZ',40739156,'Penza',17),('Gannon',57580823285,'07-09-19','P.O. Box 551, 7570 Mauris. Rd.',110,'BA',44033682,'Palma de Mallorca',27),('Joan',20646180584,'21-07-19','P.O. Box 675, 3174 Posuere Av.',5209,'Norte de Santander',58265091,'Villa del Rosario',6),('August',63155582422,'10-06-19','7070 Elit, Road',8895,'Pomorskie',64765120,'Tczew',8),('Upton',45240736131,'12-01-20','Ap #259-6863 Enim St.',6722,'Warmińsko-mazurskie',44657027,'Elbląg',16),('Calista',59421840392,'30-07-19','9268 Arcu. St.',6465,'SP',34227848,'Piracicaba',8);
INSERT INTO cliente (nome,cpf,data_nascimento,logradouro,numero,bairro,cep,cidade,estado_id) VALUES ('Odysseus',63538865455,'23-08-19','6930 Luctus Rd.',893,'Loreto',85049342,'Yurimaguas',22),('Jameson',86415745773,'09-03-20','Ap #206-2713 Maecenas St.',5056,'HH',85663854,'Hamburg',22),('Theodore',66471661130,'24-10-19','Ap #156-8475 Mattis St.',6685,'San José',50591634,'Guadalupe',27),('Jacob',64913325715,'13-05-20','2214 Mus. St.',5082,'SU',86210988,'Lairg',22),('Lucius',73990853917,'27-12-20','P.O. Box 473, 837 Duis Rd.',8186,'SA',54846934,'Whyalla',20),('Adria',28893810469,'09-04-20','P.O. Box 237, 4584 At, Av.',2884,'West Bengal',69751141,'Kanchrapara',11),('Ezra',95483034724,'13-11-19','P.O. Box 555, 2943 In, Rd.',6303,'Bremen',62919812,'Bremen',4),('Hadassah',79556449295,'16-12-20','2063 Pede Rd.',6311,'ANC',37927860,'Chimbote',5),('Ulric',70126452255,'03-07-20','P.O. Box 167, 1814 Sem, St.',8737,'A',87092760,'Alajuela',22),('Rebekah',64844941306,'21-12-19','Ap #938-3848 Vulputate, Rd.',6688,'Nebraska',54457734,'Omaha',21);
INSERT INTO cliente (nome,cpf,data_nascimento,logradouro,numero,bairro,cep,cidade,estado_id) VALUES ('Fritz',94994133959,'22-12-19','Ap #230-5049 Lorem, Rd.',5986,'Gye',80563702,'Sacheon',27),('Leah',21255538736,'14-12-20','Ap #751-3561 Lorem, Ave',6651,'Metropolitana de Santiago',66759320,'Conchalí',13),('Samuel',11459026526,'09-10-19','8713 Adipiscing Av.',6336,'Île-de-France',31366478,'Saint-Maur-des-Fossés',3),('Clayton',61826127063,'23-08-19','P.O. Box 493, 6933 Euismod Ave',4156,'SL',75071181,'Dillingen',11),('Sandra',12863771824,'19-04-19','368-5536 Phasellus Street',56,'San José',56369625,'Concepción',24),('Daphne',72599044028,'19-05-20','P.O. Box 179, 870 Nisl Rd.',7846,'UP',64193903,'Agra',17),('Nina',43984840354,'12-05-19','845-1891 Ornare Av.',5667,'Florida',15123877,'Miami',12),('Elton',26952587895,'27-06-19','909-3265 Posuere Av.',9194,'BE',87143158,'Berlin',16),('Xerxes',93374893234,'20-04-20','231-1727 Duis Av.',5653,'North Island',38479118,'Hawera',4),('Adena',92882805855,'30-06-20','Ap #914-5719 Eu Rd.',9160,'Aquitaine',31743073,'Biarritz',6);
INSERT INTO cliente (nome,cpf,data_nascimento,logradouro,numero,bairro,cep,cidade,estado_id) VALUES ('Blythe',39230905514,'14-07-20','P.O. Box 238, 2868 Aliquet Rd.',311,'SP',47811531,'Jundiaí',12),('Amity',72749336850,'08-12-20','9629 Eu, Rd.',6688,'NI',51432749,'Levin',21),('Martin',87161394498,'30-08-20','P.O. Box 914, 6578 Eu Road',6665,'ANC',49287452,'Huaraz',4),('Reese',75346221940,'07-09-19','P.O. Box 849, 7762 Nec Street',4143,'CO',38820948,'Fort Collins',17),('Dakota',11225220602,'28-05-20','8892 Fermentum Av.',7339,'Gye',48273510,'Busan',16),('Carter',51199817947,'20-07-20','Ap #426-336 Cum Ave',6274,'H',99131668,'Mercedes',8),('Malachi',27264847109,'17-07-19','6678 Libero St.',9578,'C',27702248,'Galway',12),('Ella',64039155219,'22-10-19','1871 Sapien Avenue',6907,'NIZ',28944787,'Nizhny',10),('Tarik',46240611167,'17-05-20','499-1790 Ut, St.',8106,'Sonora',88412394,'Guaymas',26),('Winter',11287608577,'27-07-19','1701 Enim. Avenue',6655,'Vienna',19980219,'Vienna',25);
INSERT INTO cliente (nome,cpf,data_nascimento,logradouro,numero,bairro,cep,cidade,estado_id) VALUES ('Rebekah',43112691905,'04-10-20','Ap #260-5954 Etiam St.',3183,'FA',82202404,'North Waziristan',10),('Jack',85754653480,'26-04-20','Ap #104-2059 Etiam Avenue',4888,'Kogi',65887700,'Okene',8),('Lamar',16174749905,'21-09-20','865-5544 Sociis Ave',4009,'Chu',80787887,'Gongju',27),('Beck',60057512670,'14-01-20','102-3693 Venenatis St.',7265,'Ross-shire',68383953,'Invergordon',11),('Kadeem',41330730335,'08-07-20','Ap #263-9854 Mauris St.',4576,'Limburg',74057056,'Maastricht',22),('Noelani',17444553143,'14-10-20','1501 Tincidunt Rd.',5744,'Imo',77189799,'Owerri',17),('Rafael',27385516464,'03-05-20','Ap #779-8274 Libero. St.',4894,'Nebraska',37994806,'Omaha',11),('Clementine',70903084923,'21-09-19','194-2358 Ut, Ave',1173,'Sam',16937608,'Samsun',26),('Fulton',36989678732,'16-06-19','P.O. Box 303, 7934 Faucibus. Ave',1106,'ANT',26842606,'Apartadó',17),('Caleb',82133983655,'23-10-19','3679 Imperdiet Rd.',8253,'DE',68614351,'Pike Creek',2);
INSERT INTO cliente (nome,cpf,data_nascimento,logradouro,numero,bairro,cep,cidade,estado_id) VALUES ('Rhiannon',35309047127,'14-05-20','P.O. Box 350, 3736 Maecenas Ave',7786,'GL',95930720,'Bristol',13),('Ira',66544776078,'04-03-19','8171 Et, Street',6954,'LX',72412056,'Nadrin',6),('Jorden',49454505824,'10-10-20','841-7762 Vehicula St.',332,'Wie',43541461,'Vienna',13),('Clementine',68039072925,'05-08-20','7196 Eleifend Street',4396,'Rajasthan',96233291,'Ganganagar',4),('Clare',76598379512,'01-05-20','P.O. Box 871, 7640 Parturient Av.',2467,'ID',67666800,'Idaho Falls',18),('Karly',39636445252,'10-09-19','703-4714 Ut, St.',8982,'West Nusa Tenggara',76431736,'Bima',23),('Whilemina',61623740196,'20-03-19','689 Eleifend St.',1865,'VT',97979603,'Montpelier',12),('Leandra',45054107283,'18-11-20','P.O. Box 103, 1064 Turpis Av.',8223,'IN',79088547,'South Bend',20),('Joelle',80801826053,'07-12-19','7024 Amet Av.',1691,'Queensland',78086257,'Redlands',22),('Irma',62846080213,'25-02-19','P.O. Box 630, 2497 Sed St.',8362,'Rio de Janeiro',54494417,'Nova Iguaçu',16);
INSERT INTO cliente (nome,cpf,data_nascimento,logradouro,numero,bairro,cep,cidade,estado_id) VALUES ('Illiana',91494592030,'08-11-19','510-6174 Lectus Av.',5873,'Gyeonggi',76698278,'Dongducheon',11),('Faith',24904134289,'03-05-20','Ap #120-258 Tellus. Road',5397,'CL',45750249,'Ávila',12),('Logan',88243686407,'27-03-20','774-4750 Duis Rd.',6892,'ATL',28395528,'Soledad',7),('Norman',28819941812,'07-01-21','4186 Ridiculus Av.',6521,'New South Wales',27554102,'Sydney',23),('Hanae',37803640630,'26-09-20','436-5144 Ornare Road',8986,'Vienna',51220792,'Vienna',26),('Colby',81415412409,'31-12-20','3838 Aliquet Rd.',6802,'Vienna',36383981,'Vienna',8),('Robin',91236472047,'02-11-19','Ap #516-8674 Tellus. Rd.',3843,'East Java',33388641,'Kediri',4),('Inga',43433049900,'14-10-20','678-839 Diam. Road',2817,'NSW',59150119,'Newcastle',22),('Clementine',21076431456,'12-02-19','Ap #166-3144 Aliquam Rd.',9944,'VT',15205618,'Montpelier',16),('Lawrence',48811485494,'09-06-19','596-1843 In, Av.',139,'Hatay',96655951,'Dörtyol',3);


CREATE TABLE STATUS_VEICULO(
ID SMALLINT AUTO_INCREMENT PRIMARY KEY,
DESCRICAO VARCHAR(50)
);

CREATE TABLE usuario(
CODIGO SMALLINT AUTO_INCREMENT PRIMARY KEY,
NOME VARCHAR(100),
EMAIL VARCHAR(150),
SENHA VARCHAR (300)
);

CREATE TABLE permissao(
CODIGO SMALLINT AUTO_INCREMENT PRIMARY KEY,
DESCRICAO VARCHAR(100)
);

CREATE TABLE usuario_permissao (
CODIGO_USUARIO INTEGER,
CODIGO_PERMISSAO INTEGER,
	FOREIGN KEY (CODIGO_USUARIO) REFERENCES usuario (codigo),
	FOREIGN KEY (CODIGO_PERMISSAO) REFERENCES permissao (codigo)
);

ALTER TABLE veiculo ADD COLUMN STATUS SMALLINT;

alter TABLE VEICULO add constraint status_fk FOREIGN KEY (STATUS) REFERENCES STATUS_VEICULO (ID) ;

INSERT INTO usuario (codigo, email, nome, senha) VALUES (1,'jcarlos.nascimento@outlook.com','José Carlos','$2a$10$tlFgE76lrbqPkkJOLv.MROJwK4sEFy6uoKDXfbI.RHZkSfs2DqZv2');

INSERT INTO permissao(codigo, descricao) VALUES (1, 'ROLE_ALL');

INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) VALUES (1,1);

INSERT INTO marca (id, descricao) VALUES (1,'Audi');
INSERT INTO marca (id, descricao) VALUES (2,'BMW');
INSERT INTO marca (id, descricao) VALUES (3,'FIAT');
INSERT INTO marca (id, descricao) VALUES (4,'Honda');
INSERT INTO marca (id, descricao) VALUES (5,'hyundai');

 INSERT INTO STATUS_VEICULO (ID, DESCRICAO) VALUES (1,'Disponível');
 INSERT INTO STATUS_VEICULO (ID, DESCRICAO) VALUES (2,'Locado');
 INSERT INTO STATUS_VEICULO (ID, DESCRICAO) VALUES (3,'Em Atraso');
 INSERT INTO STATUS_VEICULO (ID, DESCRICAO) VALUES (4,'Manutenção');
 
 INSERT INTO veiculo (marca, modelo, ano, cor, categoria, tipo, placa, chassi) VALUES (4, 'City', 2019, 6, 5, 2, 'HON-0001', 'AJJU7AY20PL2JDMNH');
 
commit;


 

