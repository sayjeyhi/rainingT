anArray = [1,2,3,4,5];

# An array is a ordered list of items/elements.
p anArray               # => [1, 2, 3, 4, 5]
p anArray.last          # returns the last element of the array
p anArray.first         # returns the first element of the array

# RANGE AND CONVERTING
numberRange = 0..100;
z = numberRange.to_a;
p z.shuffle


# ADD TO ARRAY
p z.unshift("Jey")      # Add Jey as first Item
z << 200                # Add 200 as last Item
z.append(200)
z.push(200)
p z

# REMOVE FROM ARRAY
p z.pop                 # Remove last item and return it

# IF WE WANT TO MUTATE WE CAN USE ! AT THE END OF THE METHOD, like:
z.uniq!                 # Remove duplicates
p z

# CHECK EXISTENCE
z.include?(100)         # Check if 100 is included in the array

# Split and Join
anArray.join("-")       # Join all elements of the array with a "-", and return a string
"1-2-43-5".split("-")   # Split the string into an array, using the "-", and return an array
p %w(a b c d e f)       # faster: Create an array with the words a, b, c, d, e, f


# LOOP OVER ARRAY ITEMS
anArray.each do |item|
  puts item
end
#  OR
anArray.each { |item| puts item }


# FILTERING ARRAY
anArray.select { |item| item.even? }
