# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170620150827) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "rooms", force: :cascade do |t|
    t.integer  "host_id",                     null: false
    t.string   "title",                       null: false
    t.integer  "price",                       null: false
    t.integer  "num_guests",                  null: false
    t.integer  "bedrooms",                    null: false
    t.integer  "beds",                        null: false
    t.text     "description",                 null: false
    t.string   "address",                     null: false
    t.text     "rules",                       null: false
    t.string   "prop_type",                   null: false
    t.string   "room_type",                   null: false
    t.boolean  "wifi",        default: false
    t.boolean  "kitchen",     default: false
    t.boolean  "ac",          default: false
    t.boolean  "tv",          default: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
  end

  add_index "rooms", ["host_id"], name: "index_rooms_on_host_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
