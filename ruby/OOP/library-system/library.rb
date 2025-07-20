class Catalog
  def initialize(books_list = [])
    @books_list = books_list
  end

  def see_catalog
    @books_list
  end

  def add_book(user_book)
    book = @books_list.find { |u| u[:title] == user_book[:title] }
    if book
      book[:count] += 1
    else
      @books_list << {title:user_book[:title], count:user_book[:count]}
    end
  end

  def remove_book(user_book)
    book = @books_list.find { |u| u[:title] == user_book[:title] }
    if book 
      if book[:count] > 0
        book[:count] -= 1
      end 
    else
      puts 'Book not found or out of stock'
    end
  end
end

# catalog = Catalog.new([{title:'Lord of the rings',count: 2}])

# catalog.add_book({title:'Game of Thrones', count:1})
# catalog.add_book({title:'Game of Thrones', count:1})
# catalog.remove_book({title:'Game of Thrones'})
# catalog.remove_book({title:'Lord of the rings'})
# catalog.remove_book({title:'Lord of the srings'})
# puts "===="
# catalog.see_catalog

# ruby test/test_catalog.rb



