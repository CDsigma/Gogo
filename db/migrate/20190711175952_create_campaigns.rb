class CreateCampaigns < ActiveRecord::Migration[5.2]
  def change
    create_table :campaigns do |t|

      t.integer :author_id, null: false
      t.string :title, null: false
      t.string :project_description
      t.string :tagline
      t.string :image_url
      t.string :location
      t.integer :campaign_duration
      t.integer :funding_goal
      t.integer :funding
      t.boolean :launched, null: false

      t.timestamps
    end
    add_index :campaigns, :author_id
    add_index :campaigns, :title
  end
end
