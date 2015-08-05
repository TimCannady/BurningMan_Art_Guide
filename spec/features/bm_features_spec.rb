require 'rails_helper'

describe 'BM Project', :js => true do

  it 'see a stuffs' do
    visit '/'
    expect(page).to have_text('Tour')
  end

  it 'see a stuffs' do
    visit '/'
    expect(page).to have_text('Art')
  end

end