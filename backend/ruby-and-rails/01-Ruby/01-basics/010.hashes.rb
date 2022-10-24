myHash = { 'a': 1, 'color' => 'red', 'bool' => true }
# Like objects in JS

p myHash['color']       # => 'red'
p myHash['bool']        # => true
p myHash[:a]            # access with symbol a => 1

p myHash.keys           # => ['a', 'color', 'bool']

myHash[:data] = [1,2,3]
p myHash[:data]


# LOOP and FILTER has
myHash.each { |key, value| p "=== #{key} => #{value}" }
p myHash.select{ |key, value| value.is_a?(String) }

