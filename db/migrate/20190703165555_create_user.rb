class CreateUser < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email
      t.string :session_token
      t.string :password_digest
      t.string :first_name
      t.string :last_name
      t.string :profile_body
      
      t.timestamps
    end
  end
end
