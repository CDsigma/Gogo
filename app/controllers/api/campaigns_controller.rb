class Api::CampaignsController < ApplicationController
    def create
        @campaign = Campaign.new(campaign_params)
        @campaign.author_id = current_user.id
        if @campaign.save
            render "api/campaigns/edit"
        else
            render json: @campaign.errors.full_messages, status: 422
        end
    end

    def index
        @campaigns = Campaign.all
    end

    def campaign_params
        params.require(:campaign).permit(:author_id, :title, :launched)
    end
end