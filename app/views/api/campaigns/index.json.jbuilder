@campaigns.each do |campaign|
    json.set! campaign.id do
        json.extract! campaign, :id, :title, :tagline, :launched, :image_url, :campaign_duration, :funding_goal, :funding
    end
end