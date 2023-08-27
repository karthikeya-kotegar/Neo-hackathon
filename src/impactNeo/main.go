package impactNeo

import (
	"impactNeo/nep17"

	"github.com/nspcc-dev/neo-go/pkg/interop"
	"github.com/nspcc-dev/neo-go/pkg/interop/lib/address"
	"github.com/nspcc-dev/neo-go/pkg/interop/storage"
)

const (
	decimals   = 8
	multiplier = 100000000
)

var (
	owner = address.ToHash160("NbrUYaZgyhSkNoRo9ugRyEMdUZxrhkNaWB")
	token nep17.Token
	ctx   storage.Context
)

// init initializes Token Interface and storage context for the Smart
// Contract to operate with
func init() {
	token = nep17.Token{
		Name:           "Impact NEO Token",
		Symbol:         "INT",
		Decimals:       decimals,
		Owner:          owner,
		TotalSupply:    11000000 * multiplier,
		CirculationKey: "TokenCirculation",
	}
	ctx = storage.GetContext()
}

func Symbol() string {
	return token.Symbol
}

func Decimals() int {
	return token.Decimals
}

func TotalSupply() int {
	return token.GetSupply(ctx)
}

func BalanceOf(holder interop.Hash160) int {
	return token.BalanceOf(ctx, holder)
}

// Transfer token from one user to another
func Transfer(from interop.Hash160, to interop.Hash160, amount int, data any) bool {
	return token.Transfer(ctx, from, to, amount, data)
}

// Mint initial supply of tokens
func Mint(to interop.Hash160) bool {
	return token.Mint(ctx, to)
}
