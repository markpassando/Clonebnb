# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
img_url |string|

## rooms
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
address |string| not null
long: |float| not null
lat: |float| not null
rules | text      | not null
host_id   | integer   | not null, foreign key (references users), indexed
trip_id | integer   | not null, foreign key (references trips), indexed
price    | integer   | not null
prop_type    | string   | not null
room_type    | string   | not null
num_guests    | integer   | not null
bedrooms    | integer   | not null
beds    | integer   | not null
amenities    | boolean   | not null, default false (Wireless Internet, Gym, Heating, TV, Fireplace, etc.)

## room_pics
possible pictures?

## trips
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id   | integer   | not null, foreign key (references users), indexed
room_id       | string    | not null, foreign key (references users), indexed
status |string| not null, default pending
check_in | date    | not null
check_out | date    | not null

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id   | integer   | not null, foreign key (references users), indexed
room_id       | integer    | not null, foreign key (references users), indexed
trip_id |integer| not null, foreign key (references users), indexed
body | text| not null
rating | integer | not null
