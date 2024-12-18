/*포스팅 관련*/
create table post_table(
    id bigint not null auto_increment,
    post varchar(255) not null,
    category_id int,
    title varchar(255) not null,
    content text,
    create_date datetime default current_timestamp,
    hit int default '0',
    empathy int default '0',
    hashtag varchar(255) default null,
    primary key(id)
);
create table post_file(
    id bigint not null auto_increment,
    post_id bigint not null,
    nfilename varchar(100),
    ofilename varchar(100),
    ext varchar(5),
    fsize bigint,
    primary key(id)
);
create table post_comment(
    id bigint not null auto_increment,
    post_id bigint not null,
    username varchar(100),
    useremail varchar(100),
    social varchar(10),
    comment text,
    create_date datetime default current_timestamp,
    primary key(id)
);
create table post_category(
    id bigint not null auto_increment,
    title varchar(50),
    num int,
    primary key(id)
);
/*사이트운영*/
create table myskills(
    id bigint not null auto_increment,
    name varchar(20),
    value int,
    primary key(id)
);
create table mytimelines(
    id bigint not null auto_increment,
    jobtitle varchar(255),
    jobwhere varchar(50),
    wdate varchar(15),
    primary key(id)
);