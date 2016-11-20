require 'rails_helper'
require 'math_dojo'
describe Mathdojo do
  it "is called the number One" do
    number = initialize.new
    expect(number.value).to eq(1);
   end
 end
