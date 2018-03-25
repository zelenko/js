// just for HTTP server
package main

import (
	"fmt"
	"github.com/julienschmidt/httprouter"
	//"gopkg.in/mgo.v2/bson"
	//"html/template"
	"net/http"
)

// main is the entry point for the program.
func main() {

	fmt.Println("HTTP port :80")

	r := httprouter.New()
	//r.GET("/", indexHandler)
	r.NotFound = http.FileServer(http.Dir("."))

	http.ListenAndServe(":80", r)

}
