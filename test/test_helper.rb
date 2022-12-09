ENV['RAILS_ENV'] ||= 'test'
require_relative '../config/environment'
require 'rails/test_help'
require "minitest/reporters"
Minitest::Reporters.use!

class ActiveSupport::TestCase
  # Run tests in parallel with specified workers
  parallelize(workers: :number_of_processors)

  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all
<<<<<<< HEAD
=======
  include ApplicationHelper
>>>>>>> 16f988531f3a2150200243474f6efa50ab16510d

  # Add more helper methods to be used by all tests here...
end
