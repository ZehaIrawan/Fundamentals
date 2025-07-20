require 'minitest/autorun'
require_relative '../library'
require 'minitest/reporters'
Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new

class CatalogTest < Minitest::Test
  def test_catalog_initialization
    books = [{title: 'Game of Thrones', count: 1}]
    catalog = Catalog.new(books)

    books_list = catalog.see_catalog

    assert_equal 1, books_list.size
    assert_equal 'Game of Thrones', books_list[0][:title]
  end

  def test_catalog_add_book

    catalog = Catalog.new()

    catalog.add_book({title:'1984',count:1})
    catalog.add_book({title:'Rain',count:1})

    books_list = catalog.see_catalog

    assert_equal 2, books_list.size
  end
end
