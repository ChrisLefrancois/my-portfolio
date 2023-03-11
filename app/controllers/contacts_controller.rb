class ContactsController < ApplicationController

  def create
    @contact = Contact.new(contact_params)
    @contact.request = request

    respond_to do |format|
      if @contact.deliver
        format.html { redirect_to root_path }
        # format.text { render partial: 'contacts/received', formats: [:html] }
      else
        format.text { render partial: 'pages/form', locals: { contact: @contact }, formats: [:html] }
      end
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :message)
  end
end
