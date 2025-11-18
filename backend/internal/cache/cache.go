package cache

import (
	"sync"
	"time"
)

type CacheItem struct {
	Value      string
	Expiration time.Time
}

var (
	cacheMap sync.Map
	ttl      = 7 * 24 * time.Hour
)

func Init() {
	// Initialize cache, nothing special needed for sync.Map
}

func Set(key, value string) {
	cacheMap.Store(key, CacheItem{
		Value:      value,
		Expiration: time.Now().Add(ttl),
	})
}

func Get(key string) (string, bool) {
	item, ok := cacheMap.Load(key)
	if !ok {
		return "", false
	}
	cacheItem := item.(CacheItem)
	if time.Now().After(cacheItem.Expiration) {
		cacheMap.Delete(key) // Remove expired item
		return "", false
	}
	return cacheItem.Value, true
}
