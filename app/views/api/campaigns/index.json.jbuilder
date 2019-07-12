@campaigns.each do |campaign|
    json.set! campaign.id do
        json.extract! campaign, :id, :title
    end
end