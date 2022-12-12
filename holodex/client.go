package holodex

import (
	"encoding/json"
	"fmt"
	"net/http"
	"net/url"
	"time"
)

const baseURL = "https://holodex.net/api/v2"

func GetLastLive() (time.Time, error) {
	const ameChannelId = "UCyl1z3jo3XHR1riLFKG5UAg"

	var data []map[string]interface{}

	url, _ := url.Parse(baseURL + "/videos")

	q := url.Query()
	q.Add("channel_id", ameChannelId)
	q.Add("include", "live_info")
	q.Add("limit", "1")
	q.Add("type", "stream")
	q.Add("status", "past")
	url.RawQuery = q.Encode()

	resp, err := http.Get(url.String())
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	err = json.NewDecoder(resp.Body).Decode(&data)
	if err != nil {
		return time.Time{}, err
	}

	fmt.Println("last live:", data[0]["start_actual"].(string))

	return time.Now(), nil
}
