require 'csv'
require 'json'

# Load attendees
attendees = CSV.table('data/attendees-3607-1529076907.csv', header_converters: nil)
puts "Found #{attendees.count} attendees..."

# Write to file
written = File.write('src/data/attendees.json', attendees.map(&:to_h).to_json)
puts "Written #{written} bytes."
