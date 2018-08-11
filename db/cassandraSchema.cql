DROP KEYSPACE IF EXISTS menu;
CREATE KEYSPACE menu WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 };
USE menu;
-- https://stackoverflow.com/questions/35036354/how-to-create-nested-collection-maptext-listtext-type-in-cassandra-database
CREATE TABLE menus (id INT PRIMARY KEY, name TEXT, submenus map<text, frozen<list<text>>>);

-- Insert data
copy menus FROM '/Users/david/hackreactor/menu/db/csv/cass-menus.csv' WITH DELIMITER=';';

-- cqlsh -u cassandra -p cassandra -f './db/cassandraSchema.cql' 127.0.0.1
