# Roadbumps
1. User new Catalog like in JS, isntead of Catalog.new in ruby

2. In ruby objects we bracket notation [:count], can't use dot notation like in JS
 
3. Feedback from chatgpt for the add_book method

  Your method is already clear and functional. Here’s how we can make it cleaner, more idiomatic, and better aligned with Ruby best practices:

| Change                                 | Why                                                        |
| -------------------------------------- | ---------------------------------------------------------- |
| `book` instead of `book_exist`         | More concise and reflects the actual object, not a boolean |
| `@books_list << ...`                   | Idiomatic Ruby (shovel operator is clearer than `push`)    |
| Removed `return`                       | Unnecessary here — method ends naturally                   |
| Used consistent spacing and formatting | Improves readability                                       |


```ruby
def add_book(book_title)
  book = @books_list.find { |b| b[:title] == book_title }

  if book
    book[:count] += 1
  else
    @books_list << { title: book_title, count: 1 }
  end
end

```

<!-- Original -->
```ruby
  def add_book(book_title)

    book_exist = @books_list.find { |u| u[:title] == book_title }
    if book_exist
      book_exist[:count] += 1
      return
    end

    @books_list.push({title:book_title, count:1})
  end
```