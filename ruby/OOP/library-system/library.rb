class Catalog
  def initialize(books_list = [])
    @books_list = books_list
  end

  def see_catalog
    puts @books_list
  end

  def add_book(book_title)

    book_exist = @books_list.find { |u| u[:title] == book_title }
    if book_exist
      book_exist[:count] += 1
      return
    end

    @books_list.push({title:book_title, count:1})
  end

  def remove_book(book)
    # @books_list
    # find book then remove it if it's only have 1 count
    # if it's above one decrase the count
  end
end

catalog = Catalog.new([{title:'Lord of the rings',count: 2}])

# catalog.see_catalog
catalog.add_book({title:'Game of Thrones', count:1})
catalog.add_book({title:'Game of Thrones', count:1})
puts "===="
catalog.see_catalog




