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

    def update
        # debugger
        @campaign = Campaign.find(params[:id])
	
        if @campaign.update_attributes(campaign_params)
            # console.log("Saved CORRECTLY!!!!")
            # redirect_to :action => 'show', :id => @campaign
        else
            # @subjects = Subject.all
            # render :action => 'edit'
            render json: @campaign.errors.full_messages, status: 422
        end
    end

    def index
        @campaigns = Campaign.all
    end

    def show
        @campaign = Campaign.find(params[:id])
    end

    def campaign_params
        params.require(:campaign).permit(:author_id, :title, :launched, :id, :project_description, :tagline, :image_url, :location, :campaign_duration, :funding, :funding_goal)
    end
end